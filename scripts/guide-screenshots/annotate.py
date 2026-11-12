"""Coach-mark annotation for guide screenshots. Usage: python3 scripts/guide-screenshots/annotate.py public/images/guides/nen-pdf-1mb
(reads raw/step-N.png and raw/targets.json, writes step-N.png). Needs Pillow."""
import json, sys, os
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageChops

DIR = sys.argv[1]
RAW = os.path.join(DIR, 'raw')
T = json.load(open(os.path.join(RAW, 'targets.json')))
RED = (239, 68, 68)
SS = 4  # supersampling for smooth shapes

font_bold = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 54)
# (anchor, max crop width in device px) per step
CFG = {1: ('center', 780), 2: ('left', 440), 3: ('left', 470), 4: ('split', 0), 5: ('center', 720), 6: ('left', 640)}


def rounded_mask(size, box, radius, ss=SS):
    w, h = size
    m = Image.new('L', (w * ss, h * ss), 0)
    ImageDraw.Draw(m).rounded_rectangle([c * ss for c in box], radius=radius * ss, fill=255)
    return m.resize((w, h), Image.LANCZOS)


def ring_layer(size, box, radius, width, color, ss=SS):
    w, h = size
    layer = Image.new('RGBA', (w * ss, h * ss), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.rounded_rectangle([c * ss for c in box], radius=radius * ss, outline=color + (255,), width=width * ss)
    return layer.resize((w, h), Image.LANCZOS)


def annotate(n):
    meta = T[str(n)]
    s = meta['scale']
    img = Image.open(os.path.join(RAW, f'step-{n}.png')).convert('RGB')
    W, H = img.size
    r = meta['rect']
    x0, y0, x1, y1 = r['x'] * s, r['y'] * s, (r['x'] + r['w']) * s, (r['y'] + r['h']) * s

    # 1) dim everything, then bring the control area back (soft edge)
    pad = 26
    box = (max(0, x0 - pad), max(0, y0 - pad), min(W, x1 + pad), min(H, y1 + pad))
    dark = Image.new('RGB', (W, H), (4, 4, 6))
    dimmed = Image.blend(img, dark, 0.55)
    mask = rounded_mask((W, H), box, 34).filter(ImageFilter.GaussianBlur(10))
    out = Image.composite(img, dimmed, mask)

    # 2) zoomed inset (magnified crop), placed in the corner farthest from the control
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    anchor, cw = CFG.get(n, ('left', 460))
    bpad = 10  # keep the crop tight at the bottom so neighbouring hint text stays out
    ct = int(max(0, y0 - pad))
    cb = int(min(H, y1 + bpad))
    if anchor == 'split':
        lw, rw, gap = 530, 230, 28
        left = img.crop((int(x0 - pad), ct, int(x0 - pad + lw), cb))
        right = img.crop((int(x1 + pad - rw), ct, int(x1 + pad), cb))
        crop = Image.new('RGB', (lw + gap + rw, cb - ct), (20, 20, 24))
        crop.paste(left, (0, 0))
        crop.paste(right, (lw + gap, 0))
        gd = ImageDraw.Draw(crop)
        for k in range(3):
            gd.ellipse([lw + gap / 2 - 3, (cb - ct) / 2 - 22 + k * 22, lw + gap / 2 + 3, (cb - ct) / 2 - 16 + k * 22], fill=(150, 150, 155))
    else:
        crop_w = min(x1 - x0 + 2 * pad, cw)
        if anchor == 'center':
            cl = int(max(0, min(W - crop_w, cx - crop_w / 2)))
        else:
            cl = int(max(0, min(W - crop_w, x0 - pad)))
        crop = img.crop((cl, ct, int(cl + crop_w), cb))
    crop_w, crop_h = crop.size
    z = min(2.4, 0.5 * W / crop_w)
    ins_w = int(crop_w * z)
    ins_h = int(crop_h * z)
    if ins_h > H * 0.30:
        ins_h = int(H * 0.30)
        z = ins_h / crop_h
        ins_w = int(crop_w * z)
    inset = crop.resize((ins_w, ins_h), Image.LANCZOS)
    margin = 56
    corners = {
        'tl': (margin, margin + 120),
        'tr': (W - ins_w - margin, margin + 120),
        'bl': (margin, H - ins_h - margin),
        'br': (W - ins_w - margin, H - ins_h - margin),
    }

    def overlap(p):
        ix0, iy0 = p
        ix1, iy1 = ix0 + ins_w, iy0 + ins_h
        ox = max(0, min(ix1, x1 + 60) - max(ix0, x0 - 60))
        oy = max(0, min(iy1, y1 + 60) - max(iy0, y0 - 60))
        return ox * oy

    order = sorted(corners.items(), key=lambda kv: (overlap(kv[1]), -((kv[1][0] + ins_w / 2 - cx) ** 2 + (kv[1][1] + ins_h / 2 - cy) ** 2)))
    pos = order[0][1]
    # shadow + thin red border
    sh = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(sh).rectangle([pos[0] + 8, pos[1] + 12, pos[0] + ins_w + 8, pos[1] + ins_h + 12], fill=(0, 0, 0, 140))
    sh = sh.filter(ImageFilter.GaussianBlur(14))
    out = Image.alpha_composite(out.convert('RGBA'), sh).convert('RGB')
    out.paste(inset, pos)
    ImageDraw.Draw(out).rectangle([pos[0] - 3, pos[1] - 3, pos[0] + ins_w + 2, pos[1] + ins_h + 2], outline=RED, width=5)

    # 3) bold red ring around the control
    rp = 12
    rbox = (x0 - rp, y0 - rp, x1 + rp, y1 + rp)
    rad = min((rbox[3] - rbox[1]) / 2, 60)
    ring = ring_layer((W, H), rbox, rad, 9, RED)
    out = Image.alpha_composite(out.convert('RGBA'), ring).convert('RGB')

    # 4) step number badge on the ring corner
    bx, by = rbox[0] - 34, (rbox[1] + rbox[3]) / 2
    big = Image.new('RGBA', (240, 240), (0, 0, 0, 0))
    bd = ImageDraw.Draw(big)
    bd.ellipse([20, 20, 220, 220], fill=RED + (255,), outline=(255, 255, 255, 255), width=10)
    bd.text((120, 122), str(n), font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 120), fill=(255, 255, 255, 255), anchor='mm')
    big = big.resize((84, 84), Image.LANCZOS)
    out = out.convert('RGBA')
    out.alpha_composite(big, (int(max(4, bx - 42)), int(max(4, by - 42))))
    out = out.convert('RGB')
    path = os.path.join(DIR, f'step-{n}.png')
    out.save(path, 'PNG', optimize=True)
    print(n, out.size, os.path.getsize(path), 'inset', order[0][0], f'{ins_w}x{ins_h} z={z:.2f}')


for n in sorted(int(k) for k in T if k.isdigit()):
    annotate(n)

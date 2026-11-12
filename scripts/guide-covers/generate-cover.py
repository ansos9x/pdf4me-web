"""Reusable 1200x630 cover generator for Guides articles.
Usage: python3 scripts/guide-covers/generate-cover.py [covers.json]
Reads the config (default: covers.json next to this script) and writes each
cover PNG into its "dir". Deterministic: dark site background, red brand
accent, PDF4Me logo mark, big-PDF -> small-PDF compression metaphor, the
article's real before/after numbers and its title. Needs Pillow + DejaVu Sans."""
import json, os, sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
W, H, S = 1200, 630, 3  # output size, supersampling factor
BG, GRID = (34, 34, 34), (42, 42, 42)
RED, RED_D, TEXT, DIM = (239, 68, 68), (220, 38, 38), (243, 243, 241), (156, 163, 175)
FD = '/usr/share/fonts/truetype/dejavu/DejaVuSans'


def font(size):
    return ImageFont.truetype(FD + '-Bold.ttf', int(size * S))


def sc(v):
    return [int(c * S) for c in v]


def wrap(draw, text, fnt, max_w):
    lines, cur = [], ''
    for word in text.split():
        t = (cur + ' ' + word).strip()
        if draw.textlength(t, font=fnt) <= max_w * S or not cur:
            cur = t
        else:
            lines.append(cur)
            cur = word
    return lines + [cur]


def logo(img, x, y, size):
    """PDF4Me mark, same geometry as public/images/favicon.svg."""
    k = size * S / 100
    ox, oy = x * S, y * S

    def P(px, py):
        return (ox + (5 + px * 0.9) * k, oy + (5 + py * 0.9) * k)

    layer = Image.new('RGBA', img.size, (0, 0, 0, 0))
    rr = Image.new('L', img.size, 0)
    ImageDraw.Draw(rr).rounded_rectangle([ox, oy, ox + 100 * k, oy + 100 * k], radius=22 * k, fill=255)
    grad = Image.new('RGBA', img.size, RED_D + (255,))
    ImageDraw.Draw(grad).polygon([(ox, oy), (ox + 100 * k, oy), (ox + 100 * k, oy + 100 * k)], fill=RED + (255,))
    layer.paste(grad, (0, 0), rr)
    pts = [P(*p) for p in [(20, 10), (58, 10), (80, 32), (80, 90), (20, 90)]]
    m = Image.new('L', img.size, 0)
    d = ImageDraw.Draw(m)
    d.polygon(pts, fill=255)
    d.line(pts + [pts[0], pts[1]], fill=255, width=int(6 * 0.9 * k), joint='curve')
    cut = Image.new('L', img.size, 255)
    cd = ImageDraw.Draw(cut)
    cd.polygon([P(*p) for p in [(50, 36), (62, 36), (62, 59), (70, 59), (70, 69), (62, 69), (62, 82), (50, 82), (50, 69), (28, 69), (28, 60)]], fill=0)
    cd.polygon([P(*p) for p in [(50, 48), (50, 59), (38, 59)]], fill=255)
    m = Image.composite(m, Image.new('L', img.size, 0), cut)
    layer.paste(Image.new('RGBA', img.size, (255, 255, 255, 255)), (0, 0), m)
    img.alpha_composite(layer)


def pdf_doc(img, x, y, w, h, fill, edge, tag, tag_fill, tag_font, line_fill):
    fold = w * 0.26
    pts = [(x, y), (x + w - fold, y), (x + w, y + fold), (x + w, y + h), (x, y + h)]
    sh = Image.new('RGBA', img.size, (0, 0, 0, 0))
    ImageDraw.Draw(sh).polygon([((px + 6) * S, (py + 12) * S) for px, py in pts], fill=(0, 0, 0, 130))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(14 * S)))
    d = ImageDraw.Draw(img)
    d.polygon([(px * S, py * S) for px, py in pts], fill=fill, outline=edge, width=int(2.5 * S))
    d.polygon(sc([x + w - fold, y, x + w, y + fold, x + w - fold, y + fold]), fill=edge)
    lw = w * 0.68
    ly = y + fold + 14
    i = 0
    while ly < y + h - h * 0.34:
        d.rounded_rectangle(sc([x + w * 0.16, ly, x + w * 0.16 + lw * (0.6 if i % 3 == 2 else 1), ly + 6]), radius=3 * S, fill=line_fill)
        ly += 16
        i += 1
    tw = d.textlength(tag, font=tag_font) / S
    th = tag_font.size / S
    tx, ty = x + w / 2 - tw / 2 - 12, y + h - th - 30
    d.rounded_rectangle(sc([tx, ty, tx + tw + 24, ty + th + 14]), radius=7 * S, fill=tag_fill)
    d.text(((tx + 12) * S, (ty + 5) * S), tag, font=tag_font, fill=(255, 255, 255))


def render(cfg, cover):
    img = Image.new('RGBA', (W * S, H * S), BG + (255,))
    glow = Image.new('RGBA', img.size, (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse(sc([700, 40, 1180, 620]), fill=RED + (70,))
    img.alpha_composite(glow.filter(ImageFilter.GaussianBlur(90 * S)))
    d = ImageDraw.Draw(img)
    for gx in range(0, W, 40):
        d.line(sc([gx, 0, gx, H]), fill=GRID + (255,), width=1)
    for gy in range(0, H, 40):
        d.line(sc([0, gy, W, gy]), fill=GRID + (255,), width=1)
    veil = Image.new('RGBA', img.size, (0, 0, 0, 0))
    vd = ImageDraw.Draw(veil)
    for i in range(700):  # fade the grid out behind the text
        vd.rectangle(sc([i, 0, i + 1, H]), fill=BG + (int(255 * min(1, (700 - i) / 400 + 0.3)),))
    img.alpha_composite(veil)

    logo(img, 64, 54, 52)
    d = ImageDraw.Draw(img)
    d.text((132 * S, 80 * S), cover['label'], font=font(24), fill=DIM, anchor='lm')
    d.rounded_rectangle(sc([64, 126, 124, 131]), radius=3 * S, fill=RED)

    tf = font(46)
    y = 160
    for ln in wrap(d, cover['title'], tf, 600):
        d.text((64 * S, y * S), ln, font=tf, fill=TEXT)
        y += 62

    nf = font(54)
    ty = 500
    d.text((64 * S, ty * S), cfg['before'], font=nf, fill=DIM)
    ax = 64 + d.textlength(cfg['before'], font=nf) / S + 22
    d.line(sc([ax, ty + 40, ax + 50, ty + 40]), fill=RED, width=int(6 * S))
    d.polygon(sc([ax + 70, ty + 40, ax + 46, ty + 22, ax + 46, ty + 58]), fill=RED)
    d.text(((ax + 96) * S, ty * S), cfg['after'], font=nf, fill=RED)

    cx = 930
    pdf_doc(img, cx - 105, 62, 210, 270, (52, 52, 54), (110, 110, 116), cfg['before'], (82, 82, 88), font(26), (200, 200, 205))
    d = ImageDraw.Draw(img)
    d.rectangle(sc([cx - 13, 350, cx + 13, 436]), fill=RED)
    d.polygon(sc([cx - 42, 430, cx + 42, 430, cx, 482]), fill=RED)
    pdf_doc(img, cx - 55, 494, 110, 112, (255, 255, 255), RED, cfg['after'], RED_D, font(20), (220, 220, 224))

    img = img.resize((W, H), Image.LANCZOS).convert('RGB')
    out = os.path.join(ROOT, cfg['dir'], cover['file'])
    os.makedirs(os.path.dirname(out), exist_ok=True)
    img.save(out, optimize=True)
    print('wrote', os.path.relpath(out, ROOT))


if __name__ == '__main__':
    path = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, 'covers.json')
    cfg = json.load(open(path, encoding='utf-8'))
    for c in cfg['covers']:
        render(cfg, c)

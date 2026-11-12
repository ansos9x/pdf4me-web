// @vitest-environment node
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import {
  loadGuides,
  articleText,
  wordCount,
  guidePath,
  listingPath,
  stripHtml,
} from '../../scripts/guides-data.mjs';

const ROOT = path.resolve(__dirname, '../..');
const guides = await loadGuides();

const pageExists = (href: string) => {
  const clean = href.replace(/^\/(vi\/)?/, '').replace(/\/$/, '');
  return (
    fs.existsSync(path.join(ROOT, 'src/pages', `${clean}.html`)) ||
    fs.existsSync(path.join(ROOT, `${clean}.html`))
  );
};

describe('guides content', () => {
  it('publishes at least one guide', () => {
    expect(guides.length).toBeGreaterThan(0);
  });

  for (const guide of guides) {
    describe(guide.id, () => {
      it('has one screenshot per step and the files exist', () => {
        for (const lang of ['vi', 'en'] as const) {
          expect(guide[lang].steps.length).toBe(guide.images.length);
        }
        for (const img of guide.images) {
          expect(fs.existsSync(path.join(ROOT, 'public', img.src))).toBe(true);
          expect(img.width).toBeGreaterThan(0);
          expect(img.height).toBeGreaterThan(0);
        }
      });

      it('keeps the raw captures next to the annotated images', () => {
        for (const img of guide.images) {
          const raw = path.join(
            ROOT,
            'public',
            path.dirname(img.src),
            'raw',
            path.basename(img.src)
          );
          expect(fs.existsSync(raw)).toBe(true);
        }
      });

      it('has 3 to 5 FAQ items in both languages', () => {
        for (const lang of ['vi', 'en'] as const) {
          expect(guide[lang].faq.length).toBeGreaterThanOrEqual(3);
          expect(guide[lang].faq.length).toBeLessThanOrEqual(5);
        }
      });

      it('keeps the Vietnamese article between 1,200 and 1,800 words', () => {
        const words = wordCount(articleText(guide, 'vi'));
        expect(words).toBeGreaterThanOrEqual(1200);
        expect(words).toBeLessThanOrEqual(1800);
      });

      it('has no em or en dashes in the English version (house style)', () => {
        const en = JSON.stringify(guide.en);
        expect(/[—–]/.test(en)).toBe(false);
      });

      it('pairs the two languages with distinct URLs under the right listings', () => {
        expect(guidePath('vi', guide)).toBe(`/vi/huong-dan/${guide.vi.slug}/`);
        expect(guidePath('en', guide)).toBe(`/guides/${guide.en.slug}/`);
        expect(listingPath('vi')).toBe('/vi/huong-dan/');
        expect(listingPath('en')).toBe('/guides/');
      });

      it('links only to tool pages that exist', () => {
        const hrefs: string[] = [];
        for (const lang of ['vi', 'en'] as const) {
          const g = guide[lang];
          const html = [
            ...g.sections.map((s: { html: string }) => s.html),
            ...g.steps.map((s: { html: string }) => s.html),
            ...g.tips.items,
          ].join('\n');
          for (const m of html.matchAll(/href="(\/[^"#?]*)"/g))
            hrefs.push(m[1]);
          for (const t of g.related.tools) hrefs.push(t.href);
          hrefs.push(`${lang === 'vi' ? '/vi' : ''}/${guide.tool}`);
        }
        expect(hrefs.length).toBeGreaterThan(0);
        for (const href of hrefs) expect(pageExists(href), href).toBe(true);
      });

      it('describes the answers in plain text for structured data', () => {
        for (const lang of ['vi', 'en'] as const) {
          for (const f of guide[lang].faq) {
            expect(stripHtml(f.a).length).toBeGreaterThan(20);
          }
        }
      });
    });
  }
});

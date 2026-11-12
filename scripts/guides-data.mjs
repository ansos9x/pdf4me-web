import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const GUIDES_DIR = path.resolve(__dirname, '../content/guides');

export const LISTING = {
  vi: {
    slug: 'huong-dan',
    kicker: 'Hướng dẫn',
    title: 'Hướng dẫn dùng công cụ PDF | PDF4Me',
    h1: 'Hướng dẫn',
    description:
      'Hướng dẫn từng bước, có ảnh minh họa, giúp bạn xử lý file PDF cho hồ sơ online ngay trong trình duyệt, không cần tải tệp lên máy chủ.',
    intro:
      'Những bài hướng dẫn từng bước với ảnh chụp thật từ công cụ, dành cho các việc thường gặp khi nộp hồ sơ trực tuyến.',
    read: 'Đọc hướng dẫn',
    home: 'PDF4Me',
    toc: 'Nội dung chính',
    step: 'Bước',
    optional: 'Tùy chọn',
    updated: 'Cập nhật',
    breadcrumb: 'Đường dẫn',
  },
  en: {
    slug: 'guides',
    kicker: 'Guides',
    title: 'PDF tool guides | PDF4Me',
    h1: 'Guides',
    description:
      'Step-by-step guides with annotated screenshots to help you handle PDF files for online submissions in your browser, without uploading them to a server.',
    intro:
      'Step-by-step articles with real screenshots from the tools, written for the jobs people most often run into when submitting documents online.',
    read: 'Read the guide',
    home: 'PDF4Me',
    toc: 'On this page',
    step: 'Step',
    optional: 'Optional',
    updated: 'Updated',
    breadcrumb: 'Breadcrumb',
  },
};

export const LANGS = ['vi', 'en'];

export async function loadGuides() {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  const files = fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith('.mjs'))
    .sort();
  const guides = [];
  for (const file of files) {
    const mod = await import(pathToFileURL(path.join(GUIDES_DIR, file)).href);
    if (mod.default && mod.default.status === 'published')
      guides.push(mod.default);
  }
  return guides.sort((a, b) => (a.published < b.published ? 1 : -1));
}

export const listingPath = (lang) =>
  lang === 'vi' ? `/vi/${LISTING.vi.slug}/` : `/${LISTING.en.slug}/`;

export const guidePath = (lang, guide) =>
  `${listingPath(lang)}${guide[lang].slug}/`;

export const homePath = (lang) => (lang === 'vi' ? '/vi/' : '/');

export function stripHtml(html) {
  return String(html)
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

export function articleText(guide, lang) {
  const g = guide[lang];
  const parts = [g.title, g.intro];
  for (const s of g.sections) parts.push(s.title, stripHtml(s.html));
  parts.push(g.stepsTitle, g.stepsIntro);
  for (const s of g.steps) parts.push(s.title, stripHtml(s.html));
  parts.push(g.tips.title, ...g.tips.items.map(stripHtml));
  parts.push(g.faqTitle);
  for (const f of g.faq) parts.push(f.q, stripHtml(f.a));
  parts.push(g.cta.title, g.cta.text);
  return parts.join(' ');
}

export const wordCount = (text) =>
  text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;

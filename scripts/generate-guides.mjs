#!/usr/bin/env node
/*
 * Builds the Guides section into dist/ after the main build:
 *   dist/guides/index.html                         (EN listing)
 *   dist/guides/<slug>/index.html                  (EN article)
 *   dist/vi/huong-dan/index.html                   (VI listing)
 *   dist/vi/huong-dan/<slug>/index.html            (VI article)
 * The built About page of each language is used as the page shell, so the
 * navbar, footer, theme script, language switcher and CSS stay in sync.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import {
  LISTING,
  LANGS,
  loadGuides,
  listingPath,
  guidePath,
  homePath,
  stripHtml,
} from './guides-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const { JSDOM } = require('jsdom');

const DIST_DIR = path.resolve(__dirname, '../dist');
const SITE_URL = (process.env.SITE_URL || 'https://ai4me.cfd').replace(
  /\/+$/,
  ''
);
const abs = (p) => `${SITE_URL}${p}`;

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const jsonLd = (obj) =>
  JSON.stringify(obj).replace(/</g, '\\u003c').replace(/>/g, '\\u003e');

const ARROW =
  '<svg class="guide-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

function breadcrumb(lang, last) {
  const L = LISTING[lang];
  const parts = [`<a href="${homePath(lang)}">${esc(L.home)}</a>`];
  if (last.href) {
    parts.push(`<a href="${listingPath(lang)}">${esc(L.kicker)}</a>`);
    parts.push(`<span aria-current="page">${esc(last.label)}</span>`);
  } else {
    parts.push(`<span aria-current="page">${esc(L.kicker)}</span>`);
  }
  return `<nav class="guide-breadcrumb" aria-label="${esc(L.breadcrumb)}">${parts.join('<span class="guide-sep" aria-hidden="true">/</span>')}</nav>`;
}

function renderArticle(lang, guide, allGuides) {
  const L = LISTING[lang];
  const g = guide[lang];
  const toc = [];
  const before = g.sections
    .map((s) => {
      toc.push([s.id, s.title]);
      const cls =
        s.kind === 'note' ? 'guide-section guide-note' : 'guide-section';
      return `<section id="${s.id}" class="${cls}"><h2>${esc(s.title)}</h2>${s.html}</section>`;
    })
    .join('\n');
  toc.push(['steps', g.stepsTitle]);
  toc.push(['tips', g.tips.title]);
  toc.push(['faq', g.faqTitle]);
  toc.push(['related', g.related.title]);

  const steps = g.steps
    .map((s, i) => {
      const n = i + 1;
      const img = guide.images[i];
      const tag = s.optional
        ? `<span class="guide-step-tag">${esc(L.optional)}</span>`
        : '';
      return `<li id="step-${n}" class="guide-step${s.optional ? ' guide-step--optional' : ''}">
<h3><span class="guide-step-num" aria-hidden="true">${n}</span><span class="guide-step-title"><span class="sr-only">${esc(L.step)} ${n}: </span>${esc(s.title)}</span>${tag}</h3>
<div class="guide-step-body">${s.html}</div>
<figure class="guide-figure"><img src="${img.src}" width="${img.width}" height="${img.height}" alt="${esc(s.alt)}" loading="lazy" decoding="async"><figcaption>${esc(s.caption)}</figcaption></figure>
</li>`;
    })
    .join('\n');

  const faq = g.faq
    .map(
      (f) =>
        `<div class="guide-faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`
    )
    .join('\n');

  const others = allGuides.filter((o) => o.id !== guide.id);
  const relatedGuides = others.length
    ? `<div class="guide-grid">${others.map((o) => cardHtml(lang, o)).join('')}</div>`
    : `<p>${esc(g.related.guidesNote)}</p>`;
  const tools = g.related.tools
    .map((t) => `<a class="guide-chip" href="${t.href}">${esc(t.label)}</a>`)
    .join('');

  const html = `<div class="guide-wrap">
${breadcrumb(lang, { href: true, label: g.kicker })}
<article class="guide-article">
<header class="guide-header">
<p class="guide-kicker">${esc(g.kicker)}</p>
<h1>${esc(g.title)}</h1>
<p class="guide-lead">${esc(g.intro)}</p>
<p class="guide-meta">${esc(L.updated)}: <time datetime="${guide.updated}">${guide.updated}</time></p>
</header>
${coverHtml(g)}
<nav class="guide-toc" aria-labelledby="guide-toc-title">
<h2 id="guide-toc-title">${esc(L.toc)}</h2>
<ol>${toc.map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join('')}</ol>
</nav>
${before}
<section id="steps" class="guide-section">
<h2>${esc(g.stepsTitle)}</h2>
<p class="guide-steps-intro">${esc(g.stepsIntro)}</p>
<ol class="guide-steps">
${steps}
</ol>
</section>
<aside id="tips" class="guide-tips" aria-labelledby="guide-tips-title">
<h2 id="guide-tips-title">${esc(g.tips.title)}</h2>
<ul>${g.tips.items.map((t) => `<li>${t}</li>`).join('')}</ul>
</aside>
<section id="faq" class="guide-section guide-faq">
<h2>${esc(g.faqTitle)}</h2>
${faq}
</section>
<section class="guide-cta" aria-labelledby="guide-cta-title">
<h2 id="guide-cta-title">${esc(g.cta.title)}</h2>
<p>${esc(g.cta.text)}</p>
<a class="lp-btn lp-btn--primary guide-cta-btn" href="${lang === 'vi' ? '/vi/' : '/'}${guide.tool}">${esc(g.cta.button)}${ARROW}</a>
</section>
<section id="related" class="guide-related">
<h2>${esc(g.related.title)}</h2>
<h3>${esc(g.related.guidesTitle)}</h3>
${relatedGuides}
<p><a class="guide-link" href="${listingPath(lang)}">${esc(g.related.listingLink)}${ARROW}</a></p>
<h3>${esc(g.related.toolsTitle)}</h3>
<div class="guide-chips">${tools}</div>
</section>
</article>
</div>`;
  return html;
}

function coverHtml(g) {
  const c = g.cover;
  if (!c) return '';
  return `<figure class="guide-cover"><img src="${c.src}" width="${c.width}" height="${c.height}" alt="${esc(c.alt)}" fetchpriority="high" decoding="async"></figure>`;
}

function cardHtml(lang, guide) {
  const L = LISTING[lang];
  const g = guide[lang];
  return `<a class="guide-card" href="${guidePath(lang, guide)}"><span class="guide-card-kicker">${esc(g.kicker)}</span><h2 class="guide-card-title">${esc(g.title)}</h2><p class="guide-card-text">${esc(g.listingSummary)}</p><span class="guide-card-cta">${esc(L.read)}${ARROW}</span></a>`;
}

function renderListing(lang, guides) {
  const L = LISTING[lang];
  return `<div class="guide-wrap">
${breadcrumb(lang, {})}
<header class="guide-header">
<p class="guide-kicker">${esc(L.kicker)}</p>
<h1>${esc(L.h1)}</h1>
<p class="guide-lead">${esc(L.intro)}</p>
</header>
<div class="guide-grid">${guides.map((g) => cardHtml(lang, g)).join('')}</div>
</div>`;
}

function setMeta(doc, selector, attr, key, content) {
  let el = doc.head.querySelector(selector);
  if (!el) {
    el = doc.createElement('meta');
    el.setAttribute(attr, key);
    doc.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function buildPage({
  lang,
  shellHtml,
  appHtml,
  title,
  description,
  canonicalPath,
  alternates,
  type,
  ld,
  image: coverImage,
}) {
  const dom = new JSDOM(shellHtml);
  const doc = dom.window.document;
  const url = abs(canonicalPath);
  const image = abs(coverImage || '/images/og-tools.png');

  doc.title = title;
  setMeta(doc, 'meta[name="description"]', 'name', 'description', description);
  setMeta(doc, 'meta[property="og:title"]', 'property', 'og:title', title);
  setMeta(
    doc,
    'meta[property="og:description"]',
    'property',
    'og:description',
    description
  );
  setMeta(doc, 'meta[property="og:url"]', 'property', 'og:url', url);
  setMeta(doc, 'meta[property="og:type"]', 'property', 'og:type', type);
  setMeta(doc, 'meta[property="og:image"]', 'property', 'og:image', image);
  setMeta(
    doc,
    'meta[property="og:locale"]',
    'property',
    'og:locale',
    lang === 'vi' ? 'vi_VN' : 'en_US'
  );
  setMeta(doc, 'meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMeta(
    doc,
    'meta[name="twitter:description"]',
    'name',
    'twitter:description',
    description
  );
  setMeta(doc, 'meta[name="twitter:url"]', 'name', 'twitter:url', url);
  setMeta(doc, 'meta[name="twitter:image"]', 'name', 'twitter:image', image);
  setMeta(doc, 'meta[name="pdf4me-guide"]', 'name', 'pdf4me-guide', '1');

  let canonical = doc.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = doc.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    doc.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);

  doc.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((el) => el.remove());
  for (const [hreflang, p] of alternates) {
    const link = doc.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', hreflang);
    link.setAttribute('href', abs(p));
    doc.head.appendChild(link);
  }

  doc.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
    if (!el.hasAttribute('data-bentopdf-organization')) el.remove();
  });
  for (const obj of ld) {
    const s = doc.createElement('script');
    s.setAttribute('type', 'application/ld+json');
    s.textContent = jsonLd(obj);
    doc.head.appendChild(s);
  }

  const css = doc.createElement('link');
  css.setAttribute('rel', 'stylesheet');
  css.setAttribute('href', '/guide.css');
  doc.head.appendChild(css);

  const app = doc.getElementById('app');
  if (!app) throw new Error('shell has no #app container');
  app.classList.add('guide-page');
  app.innerHTML = appHtml;
  return dom.serialize();
}

function writePage(rel, html) {
  const file = path.join(DIST_DIR, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

async function main() {
  const guides = await loadGuides();
  if (guides.length === 0) {
    console.log('Guides: nothing published, skipping');
    return;
  }
  const shells = {
    en: fs.readFileSync(path.join(DIST_DIR, 'about.html'), 'utf-8'),
    vi: fs.readFileSync(path.join(DIST_DIR, 'vi', 'about.html'), 'utf-8'),
  };

  for (const lang of LANGS) {
    const L = LISTING[lang];
    const listAlternates = LANGS.map((l) => [l, listingPath(l)]).concat([
      ['x-default', listingPath('en')],
    ]);
    writePage(
      path.join(listingPath(lang), 'index.html'),
      buildPage({
        lang,
        shellHtml: shells[lang],
        appHtml: renderListing(lang, guides),
        title: L.title,
        description: L.description,
        canonicalPath: listingPath(lang),
        alternates: listAlternates,
        type: 'website',
        ld: [
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: L.h1,
            description: L.description,
            url: abs(listingPath(lang)),
            inLanguage: lang,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: L.home,
                item: abs(homePath(lang)),
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: L.kicker,
                item: abs(listingPath(lang)),
              },
            ],
          },
        ],
      })
    );

    for (const guide of guides) {
      const g = guide[lang];
      const alternates = LANGS.map((l) => [l, guidePath(l, guide)]).concat([
        ['x-default', guidePath('en', guide)],
      ]);
      writePage(
        path.join(guidePath(lang, guide), 'index.html'),
        buildPage({
          lang,
          shellHtml: shells[lang],
          appHtml: renderArticle(lang, guide, guides),
          title: `${g.title} | PDF4Me`,
          description: g.description,
          canonicalPath: guidePath(lang, guide),
          alternates,
          type: 'article',
          image: g.cover && g.cover.src,
          ld: [
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: g.title,
              description: g.description,
              inLanguage: lang,
              datePublished: guide.published,
              dateModified: guide.updated,
              mainEntityOfPage: abs(guidePath(lang, guide)),
              image: abs((g.cover || guide.images[0]).src),
              author: { '@type': 'Organization', name: 'PDF4Me' },
              publisher: {
                '@type': 'Organization',
                name: 'PDF4Me',
                url: SITE_URL,
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: g.faq.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: stripHtml(f.a) },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: L.home,
                  item: abs(homePath(lang)),
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: L.kicker,
                  item: abs(listingPath(lang)),
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: g.kicker,
                  item: abs(guidePath(lang, guide)),
                },
              ],
            },
          ],
        })
      );
    }
  }
  console.log(
    `Guides: ${guides.length} guide(s) x ${LANGS.length} languages + listings written`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

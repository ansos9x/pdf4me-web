export const OFFICIAL_SITE_URL = 'https://ai4me.cfd';

export function resolveSiteUrl() {
  return (process.env.SITE_URL || OFFICIAL_SITE_URL).replace(/\/+$/, '');
}

export function isOfficialSiteUrl(url = resolveSiteUrl()) {
  try {
    const { hostname } = new URL(url);
    return hostname === 'ai4me.cfd' || hostname === 'www.ai4me.cfd';
  } catch {
    return false;
  }
}

export function canonicalBasePath() {
  if (isOfficialSiteUrl()) return '';
  return (process.env.BASE_URL || '/').replace(/\/$/, '');
}

export function isIndexingBlocked() {
  return !isOfficialSiteUrl() && process.env.ALLOW_INDEXING !== 'true';
}

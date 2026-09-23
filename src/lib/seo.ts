export const SITE_URL = "https://pacodobispoboutiquehouse.com";

/** Turn a site-relative path into an absolute URL for social crawlers. */
export const absoluteUrl = (path: string) => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
};

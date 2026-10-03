/**
 * URLs for the files in public/.
 *
 * `base` is './' (see vite.config.js) so one build serves both from the
 * GitHub project-pages sub-path and from the custom-domain root. Everything
 * Vite emits is document-relative to match — './assets/app.js', './fonts/…'
 * in index.html, '../fonts/…' from the CSS — and files in public/ have to be
 * referenced the same way, because Vite does not rewrite them.
 *
 * A hard-coded '/images/…' ignores all of that and 404s under the sub-path.
 * Route every public asset through here.
 *
 * Note this cannot use import.meta.env.BASE_URL: for a relative base Vite
 * resolves that to '/', which is the bug it looks like the fix for.
 *
 * THE PREFIX ARGUMENT. Since the site became bilingual there are two page
 * depths, not one: / and /en/. A document-relative './images/x' is correct
 * from the root and resolves to the non-existent /en/images/x from the
 * English page, so the prefix has to come from the locale. Do not call these
 * two functions directly — use the bound copies off `useLang()`, which supply
 * it:
 *
 *     const { responsivePhoto } = useLang()
 *     const shot = responsivePhoto('portrait', [400, 700, 1100])
 *
 * The default keeps a bare call working at the root, which is what the
 * favicon and font links in index.html rely on.
 */
const ROOT_PREFIX = './'

/** URL for a file in public/, e.g. asset('images/portrait.webp'). */
export function asset(path, prefix = ROOT_PREFIX) {
  return `${prefix}${path}`
}

/**
 * A photo that ships at several widths, so the browser downloads one that
 * matches the slot rather than the largest file we have. `widths` must match
 * the files actually sitting in public/images/ — see CLAUDE.md → Adding
 * photos. Returns { src, srcSet }; the largest width is the src, for anything
 * that does not understand srcset.
 */
export function responsivePhoto(name, widths, prefix = ROOT_PREFIX) {
  return {
    src: asset(`images/${name}-${widths[widths.length - 1]}.webp`, prefix),
    srcSet: widths.map((w) => `${asset(`images/${name}-${w}.webp`, prefix)} ${w}w`).join(', '),
  }
}

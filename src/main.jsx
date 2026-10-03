import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes.jsx'
import { DEFAULT_LANG, LANGS, localePath } from './i18n/locales'
import './index.css'

/**
 * WHERE THE SITE IS MOUNTED, worked out from the address bar.
 *
 * The same build has to run at a domain root and under the project-pages
 * sub-path (f0rg3t3ch.github.io/ascentia/). The asset paths cope because
 * `base` is relative, but the router does not: it matches the full pathname,
 * and '/ascentia/' is not one of our routes. Without this the prerendered
 * page appears and is then replaced by react-router's "404 Not Found" the
 * moment it hydrates.
 *
 * So: take the pathname and strip the locale's own path off the end. What is
 * left is the mount point — '/' on a domain, '/ascentia' on github.io. At
 * build time there is no window and the routes are rendered from '/'.
 */
function detectBasename() {
  if (typeof window === 'undefined') return '/'
  const path = window.location.pathname.replace(/index\.html$/, '')
  const sub = LANGS.filter((l) => l !== DEFAULT_LANG)
    .map((l) => localePath[l])
    .find((p) => path.endsWith(p) || `${path}/`.endsWith(p))
  const mount = sub ? `${path}/`.replace(/\/+$/, '/').slice(0, -sub.length) : path
  return mount.replace(/\/+$/, '') || '/'
}

export const createRoot = ViteReactSSG({ routes, basename: detectBasename() })

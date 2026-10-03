import App from './App.jsx'
import { DEFAULT_LANG, LANGS, localePath } from './i18n/locales'

/**
 * One route per language, each prerendered to its own static HTML file:
 *
 *   /        dist/index.html      Croatian
 *   /en/     dist/en/index.html   English
 *
 * The router exists only to give vite-react-ssg two paths to walk. Nothing
 * navigates through it at runtime: in-page links are fragments and the
 * language switcher is a plain <a> that loads the other document.
 */
export const routes = LANGS.map((lang) => ({
  path: lang === DEFAULT_LANG ? '/' : localePath[lang].replace(/^\/|\/$/g, ''),
  element: <App lang={lang} />,
}))

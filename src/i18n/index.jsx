import { createContext, useContext, useMemo } from 'react'
import en from './en'
import hr from './hr'
import { DEFAULT_LANG, LANGS, assetPrefix, localeHref, localePath } from './locales'
import { asset as rawAsset, responsivePhoto as rawResponsivePhoto } from '../images'

const dictionaries = { hr, en }

/**
 * Both dictionaries have to be the same shape. A missing key is not a visible
 * error — React renders `undefined` as nothing — so a typo in one file would ship
 * a page with a silently empty heading.
 *
 * There is no test suite and no typechecker here; `npm run build` is the only
 * gate. So this runs at module load, and because the build PRERENDERS the
 * page, a mismatch throws during `npm run build` instead of reaching a
 * browser. Both flags below are statically replaced by Vite, so the whole
 * check is dead code in the client bundle.
 */
// The slogan is split into colour chunks, and the Croatian splits into a
// different number of chunks than the English. Only arrays of
// strings, rendered with .map(), belong here.
const FREE_LENGTH = ['.hero.slogan']

function assertSameShape(a, b, path = '') {
  const here = path || '<root>'
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      throw new Error(`i18n: ${here} is an array in one dictionary and not the other`)
    }
    if (FREE_LENGTH.includes(path)) {
      if (![...a, ...b].every((x) => typeof x === 'string')) {
        throw new Error(`i18n: ${here} may differ in length, so it must hold strings only`)
      }
      return
    }
    if (a.length !== b.length) {
      throw new Error(`i18n: ${here} has ${a.length} entries in hr and ${b.length} in en`)
    }
    a.forEach((item, i) => assertSameShape(item, b[i], `${path}[${i}]`))
    return
  }
  if (typeof a === 'object' && a !== null) {
    if (typeof b !== 'object' || b === null) {
      throw new Error(`i18n: ${here} is an object in one dictionary and not the other`)
    }
    const ka = Object.keys(a)
    const kb = Object.keys(b)
    const missing = ka.filter((k) => !kb.includes(k))
    const extra = kb.filter((k) => !ka.includes(k))
    if (missing.length) throw new Error(`i18n: en.js is missing ${missing.map((k) => `${path}.${k}`).join(', ')}`)
    if (extra.length) throw new Error(`i18n: en.js has unknown key ${extra.map((k) => `${path}.${k}`).join(', ')}`)
    ka.forEach((k) => assertSameShape(a[k], b[k], `${path}.${k}`))
    return
  }
  if (typeof a !== typeof b) {
    throw new Error(`i18n: ${here} is ${typeof a} in hr and ${typeof b} in en`)
  }
}

if (import.meta.env.DEV || import.meta.env.SSR) {
  LANGS.filter((l) => l !== DEFAULT_LANG).forEach((lang) => {
    assertSameShape(dictionaries[DEFAULT_LANG], dictionaries[lang])
  })
}

const LangContext = createContext(null)

/**
 * Wraps one prerendered page. The language comes from the ROUTE, not from
 * state — / is Croatian and /en/ is English, each rendered to its own static
 * HTML file — so there is nothing to toggle at runtime and nothing that can
 * differ between the prerendered markup and the first client render.
 */
export function LangProvider({ lang, children }) {
  const value = useMemo(() => {
    const prefix = assetPrefix(lang)
    return {
      lang,
      t: dictionaries[lang],
      /** Document-relative href to this same page in another language. */
      hrefTo: (to) => localeHref(lang, to),
      /**
       * public/ asset URLs, corrected for how deep this locale's page sits.
       * See src/images.js — a bare './images/…' is right at the root and
       * wrong under /en/.
       */
      asset: (path) => rawAsset(path, prefix),
      responsivePhoto: (name, widths) => rawResponsivePhoto(name, widths, prefix),
    }
  }, [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

/** `const { t, lang } = useLang()` — the dictionary for the current page. */
export function useLang() {
  const value = useContext(LangContext)
  if (!value) throw new Error('useLang() used outside <LangProvider>')
  return value
}

export { LANGS, DEFAULT_LANG, localePath }

import { useLang } from '../i18n'
import { LANGS, localeLabel, localeName, localeTag } from '../i18n/locales'

/**
 * The language switcher: both languages side by side, the current one filled.
 *
 * It stays visible at every width, including on phones where the nav links
 * are hidden — it is the only way to reach the other language.
 *
 * The links are plain <a>, not router <Link>s, on purpose: changing language
 * is a change of document, and a full navigation is what gets the right
 * prerendered HTML, `lang` attribute and canonical. The hrefs are
 * document-relative — see src/i18n/locales.js → localeHref.
 */
export default function LangSwitch({ className = '' }) {
  const { t, lang, hrefTo } = useLang()

  return (
    <nav aria-label={t.switcher.aria} className={`inline-flex items-center rounded-full bg-peach/70 p-1 ${className}`}>
      {LANGS.map((l) => {
        const current = l === lang
        return (
          <a
            key={l}
            href={hrefTo(l)}
            lang={localeTag[l]}
            hrefLang={localeTag[l]}
            aria-label={localeName[l]}
            aria-current={current ? 'true' : undefined}
            className={`rounded-full px-3 py-1.5 font-sans text-[13px] font-semibold leading-none tracking-wide transition-colors duration-300 ${
              current ? 'bg-teal-deep text-cream' : 'text-ink-soft hover:text-teal-deep'
            }`}
          >
            {localeLabel[l]}
          </a>
        )
      })}
    </nav>
  )
}

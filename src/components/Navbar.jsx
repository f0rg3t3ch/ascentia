import { useLang } from '../i18n'
import Wordmark from './Wordmark'
import LangSwitch from './LangSwitch'

const linkClasses = 'font-sans text-[15px] text-ink-soft hover:text-teal-deep transition-colors duration-300'

/**
 * Fixed at the top, floating over the page as a pill.
 *
 * Below `md` the section links are hidden and the pill keeps the wordmark and
 * the language switcher; the contact button joins from `sm` up. There is no
 * mobile drawer — the page is short and the hero carries the same two links.
 */
export default function Navbar() {
  const { t } = useLang()

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-3 sm:pt-4">
        <div className="flex items-center justify-between gap-3 rounded-full bg-cream/90 backdrop-blur-md shadow-soft pl-5 pr-2.5 sm:pl-6 sm:pr-3 h-14">
          <a href="#home" className="shrink-0">
            <Wordmark className="h-7 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-7">
            <a href="#programmes" className={linkClasses}>{t.nav.programmes}</a>
            <a href="#learning" className={linkClasses}>{t.nav.learning}</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <LangSwitch />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-teal-deep text-cream font-sans font-semibold text-[14px] px-5 py-2.5 transition-colors duration-300 hover:bg-ink"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

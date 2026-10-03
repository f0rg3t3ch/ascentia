import { site } from '../siteInfo'
import { useLang } from '../i18n'
import Wordmark from './Wordmark'
import LangSwitch from './LangSwitch'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-peach">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <Wordmark lockup className="h-10" />
          <p className="font-sans text-[14px] text-ink-soft">{t.site.location}</p>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-4">
          <LangSwitch className="bg-cream" />
          <a href="#home" className="font-sans text-[14px] text-ink-soft underline underline-offset-4 hover:text-teal-deep">
            {t.footer.backToTop}
          </a>
          <p className="font-sans text-[13px] text-ink-soft">{site.name}</p>
        </div>
      </div>
    </footer>
  )
}

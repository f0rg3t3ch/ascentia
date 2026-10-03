import { site } from '../siteInfo'
import { useLang } from '../i18n'

/**
 * The "Ascentia" brush wordmark.
 *
 * It is an IMAGE, keyed out of one of the client's posters, because no vector
 * logo has been supplied and the lettering is not a font we have. Replace
 * public/images/ascentia-wordmark.webp with a real export as soon as she
 * sends one — see CLAUDE.md → "The logo".
 *
 * `lockup` adds the "— EDUCATION —" line under it, as on the posters. That
 * line is part of the logo and is not translated.
 */
export default function Wordmark({ className = '', lockup = false }) {
  const { asset } = useLang()
  const img = (
    <img
      src={asset('images/ascentia-wordmark.webp')}
      alt={site.name}
      width={800}
      height={214}
      className={lockup ? 'block h-full w-auto' : className}
    />
  )
  if (!lockup) return img

  return (
    <span className="inline-flex flex-col items-center">
      <span className={`block ${className}`}>{img}</span>
      <span aria-hidden="true" className="mt-1 flex items-center gap-2 font-sans font-semibold text-[11px] tracking-[0.2em] text-teal-deep">
        <span className="h-[3px] w-4 rounded-full bg-teal" />
        EDUCATION
        <span className="h-[3px] w-4 rounded-full bg-teal" />
      </span>
    </span>
  )
}

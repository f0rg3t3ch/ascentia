import { site } from '../siteInfo'
import { useLang } from '../i18n'
import Photo from '../components/Photo'
import PuzzlePiece from '../components/PuzzlePiece'

// The poster sets each word of the slogan in a different brand colour. These
// are the `-deep` tones: the poster's own sage and yellow are close to
// invisible as type on peach. Order follows the poster.
const sloganColours = ['text-sage-deep', 'text-mauve-deep', 'text-teal', 'text-sun-deep', 'text-sage-deep', 'text-teal']

export default function Hero() {
  const { t, responsivePhoto } = useLang()
  const photo = responsivePhoto('puzzle', [400, 700, 1100])

  return (
    <section id="home" className="bg-peach pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div>
          <h1 className="label">
            {site.name} · {t.site.location}
          </h1>

          <p className="mt-5 font-display font-semibold leading-[1.02]" style={{ fontSize: 'clamp(2.9rem, 9vw, 5rem)' }}>
            {t.hero.slogan.map((chunk, i) => (
              <span key={i} className={sloganColours[i % sloganColours.length]}>
                {chunk}{' '}
              </span>
            ))}
          </p>

          <p className="lede mt-6 max-w-md">{t.hero.lead}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">{t.hero.cta}</a>
            <a href="#programmes" className="btn-ghost">{t.hero.secondary}</a>
          </div>
        </div>

        {/* Not wrapped in <Reveal>: this is the first screen, and a photo that
            waits for JavaScript before it fades in is a slow first paint. */}
        <div className="relative max-w-sm mx-auto w-full lg:max-w-none">
          <PuzzlePiece className="absolute -top-8 -left-8 w-24 h-24 text-mauve -rotate-12" />
          <PuzzlePiece className="absolute -bottom-8 -right-6 w-28 h-28 text-sun rotate-12" />
          <div className="relative aspect-[4/5] rounded-blob overflow-hidden shadow-lift">
            <Photo {...photo} eager sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 90vw" alt={t.hero.photoAlt} width={1100} height={1375} />
          </div>
        </div>
      </div>
    </section>
  )
}

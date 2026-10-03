import { useLang } from '../i18n'
import PuzzlePiece from '../components/PuzzlePiece'
import Reveal from '../components/Reveal'

function Points({ items }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 font-sans text-[15px] sm:text-base text-ink">
          <span aria-hidden="true" className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-teal" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Programmes() {
  const { t } = useLang()
  const { early, languages } = t.programmes

  return (
    <section id="programmes" className="bg-sage py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h2 className="section-heading">{t.programmes.heading}</h2>
        <p className="lede mt-3 text-ink">{t.programmes.sub}</p>

        {/* Ages 4–6 — the "Enrolling now!" poster */}
        <Reveal className="mt-10">
          <div className="card relative overflow-hidden sm:flex sm:items-center sm:gap-10">
            <div className="relative shrink-0 w-40 h-28 mx-auto sm:mx-0 mb-6 sm:mb-0">
              <PuzzlePiece className="absolute left-0 top-2 w-24 h-24 text-mauve -rotate-12" />
              <PuzzlePiece className="absolute right-0 top-0 w-24 h-24 text-sun rotate-[14deg]" />
            </div>
            <div>
              <p className="inline-block rounded-full bg-sun px-4 py-1.5 font-sans text-[13px] font-semibold text-ink">
                {early.badge}
              </p>
              <h3 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-teal-deep">{early.title}</h3>
              <p className="mt-2 font-sans text-base sm:text-lg text-ink">{early.body}</p>
            </div>
          </div>
        </Reveal>

        {/* Croatian and English — the "Learn Croatian and English!" poster */}
        <Reveal className="mt-8">
          <div className="rounded-blob bg-peach p-7 sm:p-10 shadow-soft">
            <h3 className="font-display font-semibold uppercase text-berry leading-tight" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
              {languages.heading}
            </h3>
            <div className="mt-7 grid sm:grid-cols-2 gap-5">
              {[languages.kids, languages.adults].map((group) => (
                <div key={group.title} className="card">
                  <h4 className="font-display font-semibold uppercase tracking-wide text-xl text-teal-deep">{group.title}</h4>
                  <Points items={group.points} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

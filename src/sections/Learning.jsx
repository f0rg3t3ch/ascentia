import { useLang } from '../i18n'
import Reveal from '../components/Reveal'

// Keyed by id, not index, so the accent colour stays with its block if the
// dictionaries are reordered.
const accents = {
  literacy: 'bg-mauve',
  empathy: 'bg-sun',
}

export default function Learning() {
  const { t } = useLang()

  return (
    <section id="learning" className="bg-peach py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h2 className="section-heading">{t.learning.heading}</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {Object.entries(t.learning.items).map(([id, item], i) => (
            <Reveal key={id} delay={i * 120}>
              <article className="card h-full">
                <span aria-hidden="true" className={`block h-2 w-14 rounded-full ${accents[id]}`} />
                <h3 className="mt-5 font-display font-semibold uppercase text-2xl text-teal-deep leading-tight">{item.title}</h3>
                <p className="mt-4 font-sans font-semibold text-ink">{item.intro}</p>
                <ul className="mt-3 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 font-sans text-[15px] sm:text-base text-ink">
                      <span aria-hidden="true" className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-teal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

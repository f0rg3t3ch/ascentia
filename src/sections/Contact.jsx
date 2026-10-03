import { site } from '../siteInfo'
import { useLang } from '../i18n'
import Reveal from '../components/Reveal'

/**
 * Phone, email and address — nothing else. No form (FormSubmit needs the
 * client to activate it), no map, no opening hours: none of that has been
 * supplied. A row whose value is empty in src/siteInfo.js is not rendered.
 */
export default function Contact() {
  const { t } = useLang()

  const rows = [
    { label: t.contact.phone, value: site.phone, href: site.phoneHref },
    { label: t.contact.email, value: site.email, href: site.emailHref },
    { label: t.contact.address, value: site.street && `${site.street}, ${site.town}` },
  ].filter((row) => row.value)

  return (
    <section id="contact" className="bg-sage py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h2 className="section-heading">{t.contact.heading}</h2>
        <p className="mt-3 font-display font-semibold uppercase text-2xl text-ink">{t.contact.sub}</p>

        <Reveal className="mt-10">
          <dl className="grid md:grid-cols-3 gap-5">
            {rows.map(({ label, value, href }) => (
              <div key={label} className="card">
                <dt className="label">{label}</dt>
                <dd className="mt-2 font-sans font-semibold text-[17px] text-teal-deep break-words">
                  {href ? (
                    <a href={href} className="underline decoration-teal/40 underline-offset-4 hover:decoration-teal-deep">
                      {value}
                    </a>
                  ) : (
                    <address className="not-italic">{value}</address>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

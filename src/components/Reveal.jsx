import { useEffect, useRef } from 'react'

/**
 * Gentle fade-and-rise as a block scrolls into view.
 *
 * The hidden state is scoped to `.reveal-ready` on <html>, which is only
 * added once React mounts — so the prerendered HTML stays fully visible if
 * JavaScript never runs. Motion is disabled under prefers-reduced-motion.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}

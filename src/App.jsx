import { useEffect } from 'react'
import { LangProvider } from './i18n'
import Seo from './components/Seo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Programmes from './sections/Programmes'
import Learning from './sections/Learning'
import Contact from './sections/Contact'

/**
 * The whole page. Two grounds alternate — peach, sage, peach, sage — and the
 * footer closes on peach.
 *
 * `lang` comes from the ROUTE, not from state: src/routes.jsx mounts this
 * once per language and vite-react-ssg prerenders each to its own HTML file.
 */
export default function App({ lang }) {
  useEffect(() => {
    // Enables the scroll-reveal styles only once JS is running, so the
    // prerendered page is never left invisible.
    document.documentElement.classList.add('reveal-ready')
  }, [])

  return (
    <LangProvider lang={lang}>
      <Seo />
      <Navbar />
      <main>
        <Hero />
        <Programmes />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}

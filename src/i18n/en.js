// ENGLISH. Everything here is taken from the client's own posters, except the
// short UI chrome (nav labels, section headings, button text, alt text, meta).
// Nothing may be added that she did not say: no prices, hours or names.
// Same shape as hr.js — the build fails if they drift (see ./index.jsx).
export default {
  meta: {
    title: 'Ascentia Education — Supetar, Brač',
    description:
      'Ascentia Education in Supetar on the island of Brač: learning through play, creativity and exploration for ages 4–6, and Croatian and English for kids and adults.',
    ogDescription: 'Small steps also reach big goals. Learning through play for ages 4–6, and Croatian and English for kids and adults, in Supetar on Brač.',
  },
  site: {
    tagline: 'Small steps also reach big goals',
    location: 'Supetar, island of Brač',
  },
  nav: {
    programmes: 'Programmes',
    learning: 'What children learn',
    contact: 'Contact',
  },
  switcher: {
    aria: 'Language',
  },
  hero: {
    // One chunk per colour, in the order of the poster.
    slogan: ['Small', 'steps', 'also', 'reach', 'big', 'goals'],
    lead: 'Learning through play, creativity, and exploration.',
    cta: 'Get in touch',
    secondary: 'Our programmes',
    photoAlt: 'A child and an adult putting a floor puzzle together',
  },
  programmes: {
    heading: 'Programmes',
    sub: 'Join us — let’s grow, learn, and play together!',
    early: {
      badge: 'Enrolling now!',
      title: 'Ages 4–6',
      body: 'Learning through play, creativity, and exploration.',
    },
    languages: {
      heading: 'Learn Croatian and English!',
      kids: {
        title: 'For kids',
        points: ['Fun learning', 'Interactive methods', 'Experienced tutors'],
      },
      adults: {
        title: 'For adults',
        points: ['English for all levels', 'Croatian for foreigners', 'Personalized approach'],
      },
    },
  },
  learning: {
    heading: 'What children learn',
    items: {
      literacy: {
        title: 'Emotional literacy',
        intro: 'Children learn to:',
        points: [
          'Recognize and name happiness, sadness, anger, and fear',
          'Calm down and control impulses in challenging moments',
          'Express emotions without big outbursts',
        ],
      },
      empathy: {
        title: 'Empathy and belonging',
        intro: 'Children develop the ability to:',
        points: [
          'Understand how others feel in a given situation',
          'Comfort a friend and help younger children',
          'Feel safe and connected within their group',
        ],
      },
    },
  },
  contact: {
    heading: 'Take the first step today!',
    sub: 'Sign up!',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
  },
  footer: {
    backToTop: 'Back to top',
  },
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled from the client's own posters. `peach` and `sage` are the
        // two grounds; everything else is an accent or type.
        peach: '#F7D2BF',
        sage: { DEFAULT: '#A9C9A2', deep: '#478244' },
        // `teal` is the wordmark colour. It is only 3.1:1 on peach, so it is
        // for large type and fills; `teal-deep` is the one for headings on
        // sage, buttons and links.
        teal: { DEFAULT: '#1C84A4', deep: '#0F5F78' },
        mauve: { DEFAULT: '#B88CA0', deep: '#9A6480' },
        sun: { DEFAULT: '#F4C442', deep: '#A47000' },
        berry: '#B85884',
        cream: '#FFF8F2',
        ink: { DEFAULT: '#23343B', soft: '#3F5058' },
      },
      fontFamily: {
        display: ['Fredoka', 'ui-rounded', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        soft: '1.75rem',
        blob: '2.5rem',
      },
      boxShadow: {
        soft: '0 2px 8px -3px rgba(35, 52, 59, 0.14), 0 16px 36px -18px rgba(35, 52, 59, 0.26)',
        lift: '0 8px 18px -8px rgba(35, 52, 59, 0.18), 0 32px 60px -26px rgba(35, 52, 59, 0.34)',
      },
    },
  },
  plugins: [],
}

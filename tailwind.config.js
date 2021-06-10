module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        sm : '0.667rem',
        base : '1rem',
        lg : '1.5rem',
        xl : '2.25rem',
        '2xl' : '3.375rem',
      },
      colors: {
        primary: {
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
        },
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

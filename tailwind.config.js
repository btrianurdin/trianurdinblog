module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Montserrat', 'sans-serif'],
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      colors: {
        'dark-primary': '#2d3748',
        'light-primary': '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

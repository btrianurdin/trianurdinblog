module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Montserrat', 'sans-serif'],
        firacode: ['Fira Code', 'consolas', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        pinky: '#E94560',
      },
      backgroundImage: {
        'hero-bg': "url('/assets/svg/hero-vector.svg')",
        'aboutme-bg': "url('/assets/svg/about-me-bg.svg')",
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      colors: {
        'dark-primary': '#16213E',
        'light-primary': '#ffffff',
        pinky: '#E94560',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1960px',
    },
    colors: {
      primary: '#a9193d',
      black: '#000000',
      level1: '#181823',
      grey: '#8491A0',
      white: '#ffffff',
      green: '#3CC74E',
      blue: '#609BFF',
      yellow: '#ffff00',
    },
    container: {
      padding: {
        DEFAULT: '1rem', // 16px
        md: '1.5rem', // 24px
        xl: '2rem',
      },
    },
    extend: {
      spacing: {
        18: '4.5rem', // 72px
        22: '5.5rem', // 88px
      },
      backgroundImage: {
        intro: "url('/img/Intro.webp')",
      },
      fontSize: {
        '3xl': ['2rem', { lineHeight: '2.375rem', fontWeight: '700' }], // 32px - 38px
        '5xl': ['3rem', { lineHeight: '3.25rem', fontWeight: '700' }], // 48px 52px
        '6xl': ['3.5rem', { lineHeight: '4.125rem', fontWeight: '700' }], // 56px - 66px
        '8xl': ['4.875rem', { lineHeight: '5.875rem', fontWeight: '700' }], // 78px - 94px
        '9xl': ['7.375rem', { lineHeight: '8.75rem', fontWeight: '700' }], // 118px - 140px
      },
      rotate: {
        25: '25deg',
      },
    },
  },
  plugins: [],
};

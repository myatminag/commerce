import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'theme' | 'plugins'> = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        md: '18px',
        '2md': '20px',
        lg: '22px',
        xl: '24px',
        '2xl': '26px',
        '3xl': '32px',
      },
      colors: {
        placeholder: '#0F524847',
        brand: {
          50: '#EFFEF9',
          100: '#C9FEEF',
          200: '#93FCDF',
          300: '#54F4CE',
          400: '#22DFB9',
          500: '#09C3A0',
          600: '#04A88C',
          700: '#087D6A',
          800: '#0C6357',
          900: '#0F5248',
          tag: '#D7EEE6',
        },
        neutral: {
          50: '#F5F8F7',
          100: '#DDEAE5',
          200: '#BBD4CC',
          300: '#91B7AD',
          400: '#6A978C',
          500: '#507C72',
          600: '#446B63',
          700: '#35504B',
          800: '#2D423E',
          900: '#293835',
          950: '#01322D',
          1000: '#141F1E',
        },
        danger: {
          100: '#FFD7D0',
          200: '#F6A089',
          300: '#DB4416',
          400: '#BF3F1F',
        },
        success: {
          DEFAULT: '#5BBC2D',
        },
        border: {
          DEFAULT: '#E1EEEC',
          100: '#BEE2DC',
        },
        table: {
          header: '#123430CC',
          border: '#DBEAE7',
        },
        upload: {
          100: '#DBF6F2AB',
          200: '#FAFDFC',
        },
      },
      borderRadius: {
        base: '6px',
      },
      boxShadow: {
        card: '0px 0px 16px 0px #BEE0DA80',
        sm: '0px 0px 4px 0px #AF9D9D40',
        base: '0px 0px 4px 0px #EAEAEA',
        'search-input': '0px 2.49px 2.49px 0px #0000000A',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;

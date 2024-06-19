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
        xs: '8px',
        sm: '12px',
        base: '14px',
        md: '16px',
        heading: '18px',
        lg: '20px',
        xl: '24px',
        '2xl': '26px',
        '3xl': '28px',
        '4xl': '30px',
        '5xl': '32px',
      },
      colors: {
        placeholder: '#0F524878',
        primary: {
          DEFAULT: '#04A88C',
          50: '#EFFEF9',
          100: '#C9FEEF',
          200: '#93FCDF',
          300: '#54F4CE',
          400: '#22DFB9',
          500: '#09C3A0',
          600: '#087D6A',
          700: '#0C6357',
          800: '#0F5248',
          900: '#01322D',
        },
        secondary: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D3D5DA',
          400: '#9CA3AF',
          500: '#6D7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        success: {
          DEFAULT: '#5BBC2D',
        },
      },
      borderRadius: {
        base: '6px',
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

import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content' | 'theme' | 'plugins'> = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../apps/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#FF3951',
        },
      },
      fontSize: {
        xs: '8px',
        sm: '12px',
        base: '14px',
        md: '16px',
        heading: '18px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '38px',
        '4xl': '48px',
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
  plugins: [],
};
export default config;

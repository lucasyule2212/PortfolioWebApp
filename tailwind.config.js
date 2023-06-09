/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      // padding: '2rem',
      // screens: {
      //   '2xl': '1400px',
      // },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontWeight: {
      thin: 200,
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      rotate: {
        inverse90: '-90deg',
      },
      textColor: {
        primary: '#fafafa',
      },
      width: {
        18: '4.7rem',
      },
      padding: {
        18: '4.5rem',
      },
      backgroundColor: {
        discord: {
          'light-blue': '#949cf7',
          'medium-blue': '#4752c4',
          blue: '#5865f2',
          'gray-1': '#424549',
          'gray-2': '#36393e',
          'gray-3': '#313338',
          'gray-4': '#2b2d31',
          'gray-5': '#202225',
          'gray-6': '#1e1f22',
          'gray-7': '#111214',
        },
      },
      boxShadow: {
        bottom: '0px 2px 1px 0px rgba(0,0,0,0.25)',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        discord: {
          blue: '#5865f2',
          'medium-blue': '#4752c4',
          'light-blue': '#949cf7',
          'gray-0': '#949ba4',
          'gray-1': '#424549',
          'gray-2': '#36393e',
          'gray-3': '#313338',
          'gray-4': '#2b2d31',
          'gray-5': '#202225',
          'gray-6': '#1e1f22',
          'gray-7': '#111214',
          'green-1': '#37ff77',
          'green-2': '#287e29',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    textColor: {
      primary: '#fafafa',
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
      width: {
        18: '4.7rem',
      },
      padding: {
        18: '4.5rem',
      },
      backgroundColor: {
        discord: {
          blue: '#5865f2',
          'gray-1': '#424549',
          'gray-2': '#36393e',
          'gray-3': '#313338',
          'gray-4': '#2b2d31',
          'gray-5': '#202225',
          'gray-6': '#1e1f22',
        },
      },
      boxShadow: {
        bottom: '0px 2px 1px 0px rgba(0,0,0,0.25)',
      },
      colors: {
        discord: {
          blue: '#5865f2',
          'gray-1': '#424549',
          'gray-2': '#36393e',
          'gray-3': '#313338',
          'gray-4': '#2b2d31',
          'gray-5': '#202225',
          'gray-6': '#1e1f22',
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
    },
  },
  plugins: [],
};

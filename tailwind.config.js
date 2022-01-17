module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '8px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '10px'
    },
    fontSize: {
      sm: ['.875rem', '1.1'],
      base: ['1rem', '1.5'],
      lg: ['1.125rem', '1.222'],
      xl: ['1.25rem', '1.4'],
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        'lg': '21px'
      }
    },

    extend: {
      colors: {
        blue: {
          100: '#587BE0',
          200: '#799CFF',
          300: '#9DB7FF',
          400: '#CFDCFF',
          500: '#EAEFFF'
        },
        accent: {
          100: '#B072FF',
          200: '#885FFF',
          300: '#3BD0AC',
          400: '#E5D0FF'
        },
        text: {
          100: '#33373B',
          200: '#414047',
          300: '#6F6E73',
          400: '#A0A0A1',
          500: '#BEBEC2',
          600: '#DFDFE0',
          700: '#F5F5F5'
        },
        gray: '#f5f5f5'
      },

      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

// 
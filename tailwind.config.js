module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,vue}'
  ],
  theme: {
    container: {
      center: true,
      padding: '0.5em'
    },
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      fontSize: {
        '4.5xl': '2.75em'
      },
      colors: {
        primary: '#84dcc6',
        'lighter-primary': '#a5ffd6',
        'darker-primary': '#6eaf9f',
        secondary: '#ff686b',
        'lighter-secondary': '#ffa69e',
        'darker-secondary': '#cc494b',
        tertiary: '#FF5666',
        quartyary: '#d0e2ff',
        'space-black': '#22223B'
      },
      letterSpacing: {
        xtrawide: '0.15em',
        superwide: '0.2em'
      },
      lineHeight: {
        '55': '5.5em'
      },
      spacing: {
        '128': '32em'
      },
      screens: {
        '2xl': '1320px'
      },
      transitionProperty: {
        'maxheight': 'max-height'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-out': {
          '100%': { opacity: '0' },
          '0%': { opacity: '1' }
        },
        slideHeader: {
          '0%': { transform: 'translateY(-3rem)' },
          '100%': { transform: 'translateY(0)' }
        },
        slideY: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'slide-right': {
          '100%': { transform: 'translateX(150%)' },
          '0%': { transform: 'translateX(0%)' }
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        headerDown: 'slideHeader 0.75s ease-in-out normal',
        'fade-in': 'fade-in .5s ease-in-out normal',
        'slide-right': 'slide-right 1s linear infinite'
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '9': '9px',
      '11': '11px',
      '12': '12px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}




/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'trans-right': {
          '0%, 100%': { transform: 'translateX(10px)' },
          '50%': { transform: 'translateX(0)' }
        },
        'spin': {
          'from': {
            opacity: '0',
            transform: 'translateY(-3rem)'

          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'trans-right': 'trans-right 1.5s ease-in-out infinite',
        'spin': 'spin 2s ease-in-out 1'
      }
    },
  },
  plugins: [],
}


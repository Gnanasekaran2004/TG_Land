/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'tg-bg':      '#060B18',
        'tg-surface': '#0D1526',
        'tg-card':    '#111D35',
        'tg-blue':    '#4272FF',
        'tg-blue-d':  '#2850CC',
        'tg-cyan':    '#42EAFF',
        'tg-orange':  '#FF7E42',
        'tg-gold':    '#FFB343',
        'tg-green':   '#1DBF73',
        'tg-text':    '#E2E8F8',
        'tg-text2':   '#8899BB',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter:  ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':      'float 4s ease-in-out infinite',
        'glow':       'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%,100%': { opacity: '0.6' },
          '50%':     { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

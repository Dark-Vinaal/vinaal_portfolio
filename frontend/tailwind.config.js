/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-bg-secondary': '#0a0a0a',
        'text-primary': '#ffffff',
        'text-secondary': '#dcdcdc',
        'accent-red': '#ff0000',
        'accent-red-hover': '#e63946',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-slow': 'glow 3s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'shine': 'shine 3s linear infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000',
            textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000',
          },
          '100%': {
            boxShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000',
            textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '20%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}


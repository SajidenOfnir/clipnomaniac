/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00FFFF',
        'neon-purple': '#B026FF',
        'neon-pink': '#FF006E',
        'neon-blue': '#00D9FF',
        'neon-green': '#39FF14',
        'dark-bg': '#0A0E27',
        'dark-surface': '#1A1F3A',
        'dark-hover': '#242947',
      },
      fontFamily: {
        'cyber': ['"Orbitron"', 'sans-serif'],
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scan-line': 'scan-line 2s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'scale-pulse': 'scale-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF' 
          },
          '100%': { 
            boxShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF' 
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.5)',
          },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(100%)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1' 
          },
        },
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 255, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(176, 38, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.5)',
        'glow-lg': '0 0 30px rgba(0, 255, 255, 0.4), 0 0 60px rgba(0, 255, 255, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
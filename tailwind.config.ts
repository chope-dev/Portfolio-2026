import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        grotesk: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      colors: {
        neo: {
          lime: '#CCFF00',
          coral: '#FF6B6B',
          coralDark: '#FF5252',
          yellow: '#FFD93D',
          purple: '#9B59B6',
          darkGreen: '#2D5016',
          darkGray: '#333333',
        },
        neon: {
          violet: '#8B5CF6',
          violetDark: '#6D28D9',
          violetLight: '#A78BFA',
          pink: '#EC4899',
          pinkDark: '#DB2777',
          pinkLight: '#F472B6',
          turquoise: '#06B6D4',
          turquoiseDark: '#0891B2',
          turquoiseLight: '#22D3EE',
        },
        brutal: {
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 10px currentColor)',
          },
          '50%': {
            opacity: '0.8',
            filter: 'drop-shadow(0 0 20px currentColor)',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(-30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config

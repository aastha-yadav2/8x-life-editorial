/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F3EC',
        canvas: '#F5F3EC',
        primary: '#111111',
        ink: '#111111',
        accent: '#D7FF45',
        lime: '#D7FF45',
        secondary: '#FF704D',
        coral: '#FF704D',
        muted: '#77766F',
        editorial: {
          border: 'rgba(17, 17, 17, 0.12)',
          darkBorder: 'rgba(215, 255, 69, 0.2)',
          subtle: '#E8E5DC',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        headline: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display-2xl': 'clamp(2.75rem, 8vw, 7.5rem)',
        'display-xl': 'clamp(2.25rem, 6vw, 5.5rem)',
        'display-lg': 'clamp(1.75rem, 4vw, 3.75rem)',
        'display-md': 'clamp(1.35rem, 2.5vw, 2.5rem)',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        editorial: '-0.03em',
        widest: '0.15em',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}


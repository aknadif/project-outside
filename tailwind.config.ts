import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        primary: '#d4a373',
        secondary: '#e9edc9',
        black: '#001219'
      },
      screens: {
        '2lg': '1380px',
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2560px'
      }
    }
  },
}

export default config

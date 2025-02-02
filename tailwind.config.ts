import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'
import containerQueries from '@tailwindcss/container-queries'
import colors from 'tailwindcss/colors' 

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
    './stories/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.amber[400],
        secondary: '#14171A',
        background: '#FFFFFF',
        foreground: '#000000',
        success: '#10B981',
        info: '#3B82F6',
        warning: '#F59E0B',
        surface: '#FFFFFF',
        danger: '#EF4444',
        outline: '#E5E7EB'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [forms, typography, aspectRatio, containerQueries]
}

export default config

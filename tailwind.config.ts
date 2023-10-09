import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      backgroundMain: '#151038',
      textMain: '#f5f5f5',
      hoverbackground: '#f0f0f0',
      triggervisualization: '#ededed',
    }
  },
  plugins: [],
}
export default config
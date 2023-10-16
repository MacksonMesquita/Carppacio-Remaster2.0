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
      backgroundMain: '#211148',
      backgroundSub: '#0F083B',
      textMain: '#f5f5f5',
      hoverbackground: '#f0f0f0',
      triggervisualization: '#ededed',
      whitemain: '#ffffff',
      darkmain: '#000000',
      triggerOrange: '#FF8223',
      colorTriggerBorder: '#999999',
      colorBorderAccordion: '#545454',
      badgeblue: '#553bc1',
      badgegray: '#999999',
      badgered: '#ff0808',
      badgegreen: '#739f0f',
      badgepurple: '#55297f',
      badgeyellow: '#bd6c0f'
    }
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {},
    colors: {
      backgroundMain: '#211148',
      backgroundSub: '#0F083B',
      textMain: '#f5f5f5',
      hoverContentbackground: '#f0f0f0',
      visualizationMenuTrigger: '#ededed',
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
      badgeyellow: '#bd6c0f',
      accordioncontent: '#bcbcbc',
      textContentcard: '#d7d7d7',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config

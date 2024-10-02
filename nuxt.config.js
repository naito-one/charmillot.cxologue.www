export default {
  ssr: true,
  /*
   ** Headers of the page
   */
  head: {
    title: "C'XOLOGUE",
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', 'content': 'ie=edge' },
      {
        hid: 'description',
        name: 'description',
        content: 'Catherine Charmillot, sexologue à Delémont, Jura suisse',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'sexologue,delémont,sexocorporel,consultation,jura,catherine,charmillot',
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'mU6PblZ-nNbvApcsNNgaFGkB2WcY2_f2SiJUiLAYuhE',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        type: 'font/woff2',
        as: 'font',
        href: '/fonts/MaterialIcons/MaterialIcons-Regular.woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        type: 'font/woff2',
        as: 'font',
        href: '/fonts/Mulish/Mulish-ExtraBoldItalic.woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        type: 'font/woff2',
        as: 'font',
        href: '/fonts/Mulish/Mulish-SemiBold.woff2',
        crossorigin: true,
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#333' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/scss/tailwind.scss',
    '~/assets/scss/icons.scss',
    '~/assets/scss/components.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/styles.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-purgecss'],

  purgeCSS: {
    paths: ['sections/**/*.vue', 'actualites/**/*.vue'],
    whitelist: [
      'bg-c-violet-1',
      'text-c-violet-1',
      'bg-gray-100',
      'text-gray-100',
      'bg-c-red-1',
      'text-c-red-1',
      'bg-c-red-3',
      'text-c-red-3',
      'bg-c-yellow-1',
      'text-c-yellow-1',
      'bg-c-yellow-3',
      'text-c-yellow-3',
      'bg-gray-900',
      'text-gray-900',
      'bg-c-violet-2',
      'text-c-violet-2',
      'bg-c-red-2',
      'text-c-red-2',
      'bg-c-yellow-2',
      'text-c-yellow-2',
    ],
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: './tailwind.config.js',
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}

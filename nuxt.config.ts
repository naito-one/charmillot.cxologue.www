import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },
  modules: [],
  css: [
    '~/assets/css/main.css',
    '~/assets/scss/icons.scss',
    '~/assets/scss/components.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/styles.scss',
  ],
  vite: { plugins: [tailwindcss()] },

  app: {
    /*
     ** Headers of the page
     */
    head: {
      title: "C'XOLOGUE",
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        {
          name: 'description',
          content: 'Catherine Charmillot, sexologue à Delémont, Jura suisse',
        },
        {
          name: 'keywords',
          content:
            'sexologue,delémont,sexocorporel,consultation,jura,catherine,charmillot',
        },
        {
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
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          type: 'font/woff2',
          as: 'font',
          href: '/fonts/Mulish/Mulish-ExtraBoldItalic.woff2',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          type: 'font/woff2',
          as: 'font',
          href: '/fonts/Mulish/Mulish-SemiBold.woff2',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
})

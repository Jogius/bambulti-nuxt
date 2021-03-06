export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Bambulti',
    title: 'Bambulti',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Wir sind die nachhaltige Schülerfirma Bambulti aus Oranienburg, die Produkte aus Bambus auf den lokalen Markt bringen will.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/scrollbar.css', '@/assets/css/z-fix.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/axios',
    'nuxt-stripe-module',
  ],

  // nuxt-stripe-mocule configuration
  stripe: {
    publishableKey: process.env.BBT_STRIPE_PUBLIC_KEY,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#3d5933',
          accent: '#446239',
          secondary: '#39592d',
          info: '#e3b235',
          warning: '#b99c00',
          error: '#890000',
          success: '#076000',
          background: '#444',
        },
        light: {
          primary: '#bcd8b2',
          accent: '#90ae85',
          secondary: '#9fbf93',
          info: 'd3dba3',
          warning: '#eccf15',
          error: '#ef601c',
          success: '#86df78',
          background: '#777',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: true,
  },

  env: {
    apiBaseUrl: process.env.BBT_SERVER_URL,
  },
}

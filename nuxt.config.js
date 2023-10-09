export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  loading: {
    height: '4px',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mira',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content:
          'design capital, get design capital, design capital africa, design capital for startups, startup',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          "Connect with *top tier designers who'll invest up to $100k in design work in exceptional early stage companies, in return for equity.",
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '' },
      { hid: 'og:title', property: 'og:title', content: 'Design Capital' },
      {
        hid: 'og:image',
        property: 'og:image',
        // content: 'https://design-capital-site.netlify.app/meta-image.png',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          "Connect with *top tier designers who'll invest up to $100k in design work in exceptional early stage companies, in return for equity.",
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: '' },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Design Capital',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          "Connect with *top tier designers who'll invest up to $100k in design work in exceptional early stage companies, in return for equity.",
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        // content: 'https://design-capital-site.netlify.app/meta-image.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
  styleResources: {
    scss: [
      '~/assets/scss/core/_variables.scss',
      '~/assets/scss/mixins/_mediaqueries.scss',
    ],
  },
}

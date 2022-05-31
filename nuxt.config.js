export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'streambox',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/day.js',
    { src: "~/plugins/swiper", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
  ],

  webfontloader: {
    google: {
      families: [
        'Noto+Sans+JP:400,700',
        'M+PLUS+Rounded+1c:100,300,400,500,700,800,900',
      ]
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    prefix: '/',
    proxy: true,
  },
  proxy: {
    '/api_mc_nekozukime/': {
      target: 'https://nekozuki-me.microcms.io',
      pathRewrite: {
        '^/api_mc_nekozukime/': '/api/'
      },
      headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

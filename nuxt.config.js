import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - fisioesthetic',
    title: 'fisioesthetic',
    htmlAttrs: {
      lang: 'en'
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/unicComponents',
      '~/components/reusable',
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'iubenda-module'
  ],
  // iubenda-module
  iubenda: {
    // Defaults:
    dev: true, // Activate module in dev environment.
    consentMode: true, // Use Google's consent mode.
    links: {
      enable: true, // Add script to include links to policy pages.
      style: 'nostyle', // Add styling to links. (nostyle, white or black)
      whiteLabel: true, // White label links.
      embed: true // Open links in embedded popup.
    },

    // Entire iubenda configuration
    config: {
      siteId: 3259225, // Required
      cookiePolicyId: 16238940, // Required

      // ...all other config options. (See Iubenda cookie banner script)
      // Example defaults:
      lang: 'es',
      gdprAppliesGlobally: false,
      cookiePolicyInOtherWindow: false,
      consentOnContinuedBrowsing: false,
      perPurposeConsent: true,
      banner: {
        acceptButtonDisplay: true,
        customizeButtonDisplay: true,
        rejectButtonDisplay: false,
        acceptButtonColor: 'black',
        acceptButtonCaptionColor: 'white',
        customizeButtonColor: '#bbb',
        customizeButtonCaptionColor: 'black',
        rejectButtonColor: 'white',
        rejectButtonCaptionColor: 'black',
        closeButtonDisplay: false,
        position: 'float-bottom-right',
        textColor: '#333',
        backgroundColor: '#ddd'
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

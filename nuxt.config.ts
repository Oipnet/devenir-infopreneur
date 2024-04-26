// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-viewport',
    '@nuxtjs/sitemap',
    ['@nuxtjs/robots', {
      configPath: 'robots.config.ts'
    }],
    'nuxt-viewport',
    'nuxt3-leaflet',
    'nuxt-security',
    'nuxt-time',
    "@stefanobartoletti/nuxt-social-share"
  ],
  googleFonts: {
    families: {
      Roboto: true,
      Oswald: true,
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
  content: {
    documentDriven: true
  },
  runtimeConfig: {
    sendApiKey: process.env.SEND_API_KEY,
    senderEmail: process.env.SENDER_EMAIL,
  },
  security: {
    headers: {
      xFrameOptions: 'DENY',
    }
  }
})
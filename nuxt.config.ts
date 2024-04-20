// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', "@nuxt/image", "@nuxt/ui", "@nuxt/content", 'nuxt-viewport', '@nuxtjs/sitemap'],
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
  }
})
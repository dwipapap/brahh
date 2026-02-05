// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      {
        name: 'Figtree',
        provider: 'google',
        weights: [300, 400, 500, 600, 700]
      }
    ],
    defaults: {
      weights: [400]
    }
  }
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/google-fonts',
        'nuxt-icon',
    ],

    googleFonts: {
        families: {
            Inter: true,
        }
    },

    build: {
        styleResources: {
          less: [
            '~/assets/global.less',
          ],
        },
      },



})

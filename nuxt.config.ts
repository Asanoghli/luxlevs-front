// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [ '@nuxtjs/i18n', '@pinia/nuxt', "@nuxt/ui"],
    runtimeConfig: {
        web_api_admin_url: 'http://localhost:8080/admin/'
    },
    i18n: {
        detectBrowserLanguage: false
    }
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },

    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-swiper'
    ],

    runtimeConfig: {
        public: {
            googleMapsApiKey: process.env.NUXT_PUBLIC_GOOGLE_MAP_API_KEY,
        },
    },

    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
});

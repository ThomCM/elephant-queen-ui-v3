// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: 'https://teq.fra1.cdn.digitaloceanspaces.com/brand/favicon.png',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://use.typekit.net/ddy8kaj.css',
                },
            ],
            viewport: 'width=device-width, initial-scale=1',
        },
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    css: ['~/assets/css/main.css'],
    devServer: {
        port: 1590,
    },
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', 'vue3-carousel-nuxt'],
    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL,
            doStorageUrl: process.env.STORAGE_URL,
        },
    },
})

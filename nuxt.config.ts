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
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', 'vue3-carousel-nuxt'],
    runtimeConfig: {
        public: {
            localApiUrl: 'http://localhost/api',
            devApiUrl: 'http://api-staging.elephant.co.ke/api',
            productionApiUrl: 'https://api.elephant.co.ke/api',
            doStorageUrl: 'https://teq.fra1.cdn.digitaloceanspaces.com',
        },
    },
})

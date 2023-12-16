// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      devApiUrl: "http://localhost/api",
      localApiUrl: "http://api-staging.elephant.co.ke/api",
      productionApiUrl: "https://api.elephant.co.ke/api",
    },
  },
});

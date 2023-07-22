// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/main.scss"],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  plugins: [
    { src: "~/plugins/oruga.ts" },
    { src: "~/plugins/vee-validate.ts" },
  ],
})

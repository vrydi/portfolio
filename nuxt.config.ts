// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/device",
    "@nuxtjs/turnstile",
  ],
  runtimeConfig: {
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: "6LdM2UcrAAAAAMUS67EmbXdML8lKkxV1fT6zUgnm",
      siteKey: "6LdM2UcrAAAAAEg5ySgOpQ1We95HJIbsdhMPi8LG",
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
    theme: {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },
});

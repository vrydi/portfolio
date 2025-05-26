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
    "nuxt-nodemailer",
  ],
  turnstile: {
    siteKey: "0x4AAAAAABeeD4mJ6Rt54XI4",
  },
  runtimeConfig: {
    nodemailer: {
      from: "portfolio",
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: true,
      auth: {
        user: "vrydi.oudewaal@outlook.com",
        pass: process.env.NUXT_NODEMAILER_AUTH_PASS,
      },
    },
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
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

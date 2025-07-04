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
    // "nuxt-nodemailer",
    // "nuxt-mail",
    [
      "nuxt-mail",
      {
        message: {
          to: process.env.NUXT_MAIL_TARGET,
        },
        smtp: {
          host: process.env.NUXT_MAIL_SMPT,
          port: process.env.NUXT_MAIL_PORT,
          auth: {
            user: process.env.NUXT_MAIL_USERNAME,
            pass: process.env.NUXT_MAIL_PASSWORD,
          },
        },
      },
    ],
  ],
  turnstile: {
    siteKey: "0x4AAAAAABeeD4mJ6Rt54XI4",
  },
  runtimeConfig: {
    // nodemailer: {
    //   from: "vrydi.oudewaal@outlook.com",
    //   host: "smtp-mail.outlook.com",
    //   port: 587,
    //   secure: true,
    //   auth: {
    //     user: "vrydi.oudewaal@outlook.com",
    //     pass: process.env.NUXT_NODEMAILER_AUTH_PASS,
    //   },
    // },
    // mail: {
    //   message: {
    //     to: "vrydi.oudewaal@outlook.com",
    //   },
    //   smtp: {
    //     host: "smtp-mail.outlook.com",
    //     port: 587,
    //   },
    // },
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

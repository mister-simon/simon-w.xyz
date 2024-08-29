// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
  ],

  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },

  googleFonts: {
    families: {
      "Architects+Daughter": {},
      "Permanent+Marker": {},
    },
  },

  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: "github-dark",
      langs: [
        "bash",
        "vue",
        "json",
        "js",
        "html",
        "css",
        "md",
        "php",
        "svelte",
      ],
    },
    navigation: {
      fields: ["title", "icon", "date", "_id"],
    },
  },

  build: {
    postcss: {
      plugins: {
        "postcss-import": {},
        "tailwindcss/nesting": {},
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  compatibilityDate: "2024-07-29",
});

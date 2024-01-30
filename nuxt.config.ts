// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
  ],
  tailwindcss: {
    config: "/tailwind.config.ts",
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
    },
    navigation: {
      fields: ["title", "icon"],
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
});

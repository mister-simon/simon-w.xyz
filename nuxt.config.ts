// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts"],
  tailwindcss: {
    config: "/tailwind.config.ts",
  },
  googleFonts: {
    families: {
      "Architects+Daughter": {},
      "Permanent+Marker": {},
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

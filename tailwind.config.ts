import type { Config } from "tailwindcss";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      animation: {
        spin: "spin var(--animate-duration) linear infinite reverse",
      },
      fontFamily: {
        script: ['"Architects Daughter"', "cursive"],
        "script-thick": ['"Permanent Marker"', "cursive"],
      },
    },
  },
  plugins: [],
  content: [],
};

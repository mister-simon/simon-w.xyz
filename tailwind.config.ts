import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      animation: {
        spin: "spin var(--animate-duration) linear infinite reverse",
        "spin-default": "spin var(--animate-duration) linear infinite",
      },
      fontFamily: {
        script: ['"Architects Daughter"', "cursive"],
        "script-thick": ['"Permanent Marker"', "cursive"],
      },
    },
  },
  plugins: [typography],
  content: [],
};

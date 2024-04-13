import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), icon()],
  adapter: netlify(),
  image: {
    domains: ["astro.build"],
    remotePatterns: [{ protocol: "https" }],
  },

});
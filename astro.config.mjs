import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), icon()],
  adapter: vercel({
    // imageService: true,
  }),
  image: {
    domains: ["astro.build"],
    remotePatterns: [{
      protocol: "https"
    }]
  }
});
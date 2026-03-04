// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	  vite: {
  },
	site: "https://example.com",
	integrations: [mdx(), sitemap(), react(), icon()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});


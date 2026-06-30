// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import rehypeExternalLinks from "rehype-external-links";

import cloudflare from "@astrojs/cloudflare";
import { unified } from "@astrojs/markdown-remark";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "static",

  markdown: {
    processor: unified({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          { target: "_blank", rel: ["noopener", "nofollow", "noreferrer"] },
        ],
      ],
    }),
  },

  adapter: cloudflare({
    imageService: "compile",
  }),
});

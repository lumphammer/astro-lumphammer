// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["noopener", "nofollow", "noreferrer"] },
      ],
    ],
  },
});

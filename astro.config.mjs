import { defineConfig } from "astro/config";
import { remarkReadingTime } from './remark-reading-time.mjs';

export default defineConfig({
  site: "https://gabrielpalhares.dev/podbits/",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});

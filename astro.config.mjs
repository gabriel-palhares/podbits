import { defineConfig } from "astro/config";
import { remarkReadingTime } from './remark-reading-time.ts';

export default defineConfig({
  site: "https://gabrielpalhares.dev/podbits/",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});

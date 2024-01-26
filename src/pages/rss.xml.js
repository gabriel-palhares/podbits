import rss from "@astrojs/rss";

export function GET(context) {
  return rss({
    title: "Podbits",
    description: "Tech Talsk, Bit-ready for you",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**/*.md"),
  });
}
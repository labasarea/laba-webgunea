import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { marked } from "marked";
import type { Ekintza } from "models/Ekintza";

export async function GET(context: any) {
  const ekintzak = await getCollection("ekintzak");

  return rss({
    // `<title>` field in output xml
    title: "Laba",
    // `<description>` field in output xml
    description: "Euskaraz, Iruñea esaten da",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: ekintzak.map(({ data }: { data: Ekintza }) => ({
      title: data.izenburua,
      pubDate: new Date(data.createdAt),
      description: data.titularra || undefined,
      link: `http://localhost:4321/ekintzak/${data.slug}`,
      content: data.deskribapena
        ? marked.parse(data.deskribapena, { async: false })
        : undefined,
    })),
    // (optional) inject custom xml
    customData: `<language>eu</language>`,
  });
}

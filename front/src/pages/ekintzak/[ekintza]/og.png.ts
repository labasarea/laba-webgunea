import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";
import { getCollection } from "astro:content";
import type { InferGetStaticParamsType } from "astro";
import { OgImage } from "../../../components/OgImage";

const posts = await getCollection("ekintzak");
type Params = InferGetStaticParamsType<typeof getStaticPaths>;

export async function GET({ params }: { params: Params }) {
  const postEntry = posts.find((p) => p.data?.slug === params.ekintza);
  if (!postEntry) {
    return new Response("Post not found", { status: 404 });
  }

  const element = OgImage(postEntry.data);
  const png = await PNG(element);
  return new Response(png as any, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}

export async function getStaticPaths() {
  return posts.map((p) => ({
    params: { ekintza: p.data?.slug },
    props: p.data,
  }));
}

export async function SVG(component: JSX.Element) {
  return await satori(component as any, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Sohne",
        data: await fs.readFile(
          "./public/fonts/sohne/soehne-dreiviertelfett.otf"
        ),
        weight: 400,
      },
    ],
  });
}

export async function PNG(component: JSX.Element) {
  return await sharp(Buffer.from(await SVG(component)))
    .png()
    .toBuffer();
}

import { defineCollection } from "astro:content";

import type { Ekintza } from "./models/Ekintza";

const ekintzak = defineCollection({
  loader: async () => {
    const response = await fetch(`${import.meta.env.STRAPI_URL}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
            query {
              ekintzak {
                id: documentId
                slug
                elkarlana {
                  label
                  erakundeak {
                    izena
                    logo {
                      formats
                    }
                  }
                }
                hitzordua
                deskribapena
                izenburua
                labakoUzta
                mainMedia {
                  alternativeText
                  formats
                }
                sarrera {
                  deskribapena
                  id
                  label
                  url
                }
                titularra
                zikloa {
                  izena
                }
              }
            }
          `,
      }),
    });

    const json = await response.json();
    const { ekintzak } = json.data;
    return ekintzak as Ekintza[];
  },
});

export const collections = { ekintzak };

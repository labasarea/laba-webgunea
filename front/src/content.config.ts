import { defineCollection } from "astro:content";

import type { Ekintza } from "./models/Ekintza";
import type { Zikloa } from "./models/Zikloa";
import type { OrriBasikoa } from "models/OrriBasikoa";

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
                createdAt
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
                  slug
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

const zikloak = defineCollection({
  loader: async () => {
    const response = await fetch(`${import.meta.env.STRAPI_URL}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
            query {
              zikloak {
                id:documentId
                slug
                izena
                deskribapena
                ekintzak {
                  id:documentId
                  slug
                  izenburua
                  hitzordua
                  mainMedia {
                    alternativeText
                    formats
                  }
                }
              }
            }
          `,
      }),
    });

    const json = await response.json();
    const { zikloak } = json.data;
    return zikloak as Zikloa[];
  },
});

const orriBasikoak = defineCollection({
  loader: async () => {
    const response = await fetch(`${import.meta.env.STRAPI_URL}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            orriBasikoak {
              id: documentId
              izenburua
              slug
              deskribapena
              edukiLibrea {
                ... on ComponentParagraphTestua {
                  type: __typename
                  id
                  testua
                }
                ... on ComponentParagraphIrudia {
                  type: __typename
                  id
                  media {
                    alternativeText
                    formats
                  }
                }
              }
            }
          }
          `,
      }),
    });

    const json = await response.json();
    const { orriBasikoak } = json.data;
    return orriBasikoak as OrriBasikoa[];
  },
});

export const collections = { ekintzak, zikloak, orriBasikoak };

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        introspection: true,
      },
    },
  },
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
      sites: [
        {
          name: "laba-webgunea",
          id: "3e9ed70d-2f4b-4152-9aaf-1129570d01b4",
          buildHook:
            "https://api.netlify.com/build_hooks/61e338c09f4ef3bf644f86db",
          branch: "main", // optional
        },
      ],
    },
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::hasiera.hasiera",
          published: {
            url: "http://localhost:1337/api/preview",
          },
        },
        {
          uid: "api::bizi.bizi",
          published: {
            url: "http://localhost:1337/api/preview/bizi",
          },
        },
        {
          uid: "api::kafetegia.kafetegia",
          published: {
            url: "http://localhost:1337/api/preview/kafetegia",
          },
        },
        {
          uid: "api::ekintza.ekintza",
          published: {
            url: "http://localhost:1337/api/preview/bizi/ekintzak/{slug}",
          },
        },
        // {
        //   uid: "api::page.page",
        //   draft: {
        //     url: "http://localhost:3000/api/preview",
        //     query: {
        //       type: "page",
        //       slug: "{slug}",
        //     },
        //   },
        //   published: {
        //     url: "http://localhost:3000/{slug}",
        //   },
        // },
        // {
        //   uid: "api::post.post",
        //   draft: {
        //     url: "http://localhost:3000/api/preview",
        //     query: {
        //       type: "post",
        //       slug: "{slug}",
        //     },
        //   },
        //   published: {
        //     url: "http://localhost:3000/blog/{slug}",
        //   },
        // },
      ],
    },
  },
});

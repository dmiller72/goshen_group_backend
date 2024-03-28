"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      media: {
        fields: ["url", "alternativeText", "id", "name", "width", "height"],
      },
      buttons: {
        populate: true,
      },
      store: {
        populate: {
          fields: ["text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      feature: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      leader: {
        populate: {
          fields: ["name", "description"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      belief: {
        populate: {
          fields: ["text", "description"],
        },
      },
      social: {
        populate: {
          fields: "url",
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      mail: {
        populate: {
          fields: ["name", "email", "message"],
        },
      },
      livestream: {
        populate: {
          fields: ["title", "onair", "schedule", "liveToggle", "slug"],
          // media: {
          //   fields: ["url", "alternativeText", "id", "name", "width", "height"],
          // },
        },
      },
      donations: {
        populate: {
          fields: [
            "heading",
            "subheading",
            "instructions",
            "newTab",
            "url",
            "text",
          ],
          logo: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      plans: {
        populate: ["product_features"],
      },
      submitButton: {
        populate: true,
      },
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};

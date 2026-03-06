import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo (SVG or PNG)",
      type: "image",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone / WhatsApp",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Platform", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    }),
    defineField({
      name: "footerLinks",
      title: "Footer Legal Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "localizedString" },
            { name: "url", title: "URL", type: "string" },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});

import { defineType, defineField } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "features", title: "Features" },
    { name: "safety", title: "Safety" },
    { name: "cta", title: "CTA" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      group: "hero",
      fields: [
        { name: "badge", title: "Badge Text", type: "localizedString" },
        { name: "title", title: "Headline", type: "localizedString" },
        { name: "subtitle", title: "Subtitle", type: "localizedText" },
        { name: "ctaLabel", title: "CTA Button Label", type: "localizedString" },
        {
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "backgroundVideo",
          title: "Background Video URL",
          type: "url",
        },
      ],
    }),
    defineField({
      name: "featureCommunity",
      title: "Feature: Community",
      type: "object",
      group: "features",
      fields: [
        { name: "title", title: "Title", type: "localizedString" },
        { name: "body", title: "Body", type: "localizedText" },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "featureGrill",
      title: "Feature: Grill Control",
      type: "object",
      group: "features",
      fields: [
        { name: "title", title: "Title", type: "localizedString" },
        { name: "body", title: "Body", type: "localizedText" },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "featureStyle",
      title: "Feature: Style",
      type: "object",
      group: "features",
      fields: [
        { name: "title", title: "Title", type: "localizedString" },
        { name: "body", title: "Body", type: "localizedText" },
        {
          name: "images",
          title: "Gallery Images",
          type: "array",
          of: [{ type: "image", options: { hotspot: true } }],
        },
      ],
    }),
    defineField({
      name: "featureQuality",
      title: "Feature: Made in Europe",
      type: "object",
      group: "features",
      fields: [
        { name: "title", title: "Title", type: "localizedString" },
        { name: "body", title: "Body", type: "localizedText" },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "safety",
      title: "Safety Section",
      type: "object",
      group: "safety",
      fields: [
        { name: "title", title: "Title", type: "localizedString" },
        { name: "body", title: "Body", type: "localizedText" },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "cta",
      title: "CTA Section",
      type: "object",
      group: "cta",
      fields: [
        { name: "title", title: "Title", type: "localizedString" },
        { name: "body", title: "Body", type: "localizedText" },
        { name: "buttonLabel", title: "Button Label", type: "localizedString" },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      group: "seo",
      fields: [
        { name: "title", title: "Meta Title", type: "localizedString" },
        { name: "description", title: "Meta Description", type: "localizedText" },
        {
          name: "ogImage",
          title: "Open Graph Image",
          type: "image",
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Homepage" };
    },
  },
});

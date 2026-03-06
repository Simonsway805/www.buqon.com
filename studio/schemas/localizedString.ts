import { defineType } from "sanity";

export const localizedString = defineType({
  name: "localizedString",
  title: "Localized String",
  type: "object",
  fields: [
    {
      name: "de",
      title: "Deutsch",
      type: "string",
    },
    {
      name: "en",
      title: "English",
      type: "string",
    },
  ],
});

export const localizedText = defineType({
  name: "localizedText",
  title: "Localized Text",
  type: "object",
  fields: [
    {
      name: "de",
      title: "Deutsch",
      type: "text",
    },
    {
      name: "en",
      title: "English",
      type: "text",
    },
  ],
});

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "YOUR_PROJECT_ID",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

type Locale = "de" | "en";

export async function getHomepage() {
  return client.fetch(`*[_type == "homepage" && _id == "homepage"][0]`);
}

export async function getTestimonials() {
  return client.fetch(
    `*[_type == "testimonial"] | order(order asc)`
  );
}

export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings" && _id == "siteSettings"][0]`
  );
}

export function localize<T extends Record<string, any>>(
  obj: T | undefined,
  field: string,
  locale: Locale
): string {
  if (!obj || !obj[field]) return "";
  return obj[field][locale] || obj[field]["de"] || "";
}

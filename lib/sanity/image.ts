import imageUrlBuilder from "@sanity/image-url";

import { sanityClient } from "./client";

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: unknown): string {
  if (!source) return "";
  try {
    return builder
      .image(source as Parameters<typeof builder.image>[0])
      .auto("format")
      .quality(90)
      .url();
  } catch {
    return "";
  }
}

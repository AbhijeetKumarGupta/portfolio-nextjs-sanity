import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2024-11-22",
});

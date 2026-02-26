import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = "2024-01-01";

if (!projectId || !dataset) {
  throw new Error(
    "Missing Sanity environment variables: NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET must be set."
  );
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
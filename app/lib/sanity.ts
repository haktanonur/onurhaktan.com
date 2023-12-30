import { createClient } from "next-sanity";

const projectId = "z67vfiw2";
const dataset = "production";
const apiVersion = "1";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
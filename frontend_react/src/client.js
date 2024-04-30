/* Connects react app w/ sanity client */
import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: "production",
  // apiVersion: "",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

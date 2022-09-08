import SanityClient, { ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config: ClientConfig = {
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  apiVersion: '2021-03-25',
  token: import.meta.env.SANITY_TOKEN,
  useCdn: import.meta.env.MODE === 'production',
};

const sanityClient = SanityClient(config);

export const sanityImageBuilder = imageUrlBuilder(sanityClient);

export default sanityClient;

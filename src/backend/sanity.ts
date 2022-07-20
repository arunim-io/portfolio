import SanityClient, { ClientConfig } from '@sanity/client';

const config = {
  dataset: import.meta.env.SANITY_DATASET,
  projectId: import.meta.env.SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',
  useCdn: import.meta.env.MODE === 'production',
} as ClientConfig;

export const client = SanityClient(config);

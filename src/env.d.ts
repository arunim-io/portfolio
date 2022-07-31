/// <reference types='astro/client' />

interface ImportMeta {
  readonly env: {
    readonly BASE_URL: string;
    readonly DEV: string;
    readonly MODE: string;
    readonly PROD: string;
    readonly SSR: string;

    readonly DEV_API_KEY: string;

    readonly SANITY_DATASET: string;
    readonly SANITY_PROJECT_ID: string;
    readonly SANITY_TOKEN: string;
  };
}

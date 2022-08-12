interface ImportMetaEnv {
  readonly DEV_API_KEY: string;

  readonly SANITY_DATASET: string;
  readonly SANITY_PROJECT_ID: string;
  readonly SANITY_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

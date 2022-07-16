/// <reference types='astro/client' />

interface ImportMeta {
  readonly env: {
    readonly DEV_API_KEY: string;
    readonly DATABASE_URL: string;
    readonly SUPABASE_URL: string;
    readonly SUPABASE_ANON: string;
  };
}

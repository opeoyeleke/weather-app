/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEO_API_KEY: string;
  readonly VITE_OPENWEATHER_API_KEY: string;
  readonly VITE_GEOAPIFY_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

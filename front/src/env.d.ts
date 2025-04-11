type EnvBoolean = "true" | "false";

interface ImportMetaEnv {
  readonly STRAPI_URL: string;
  readonly IS_PREVIEW: EnvBoolean;
}

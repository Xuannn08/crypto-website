import packageJson from "../package.json";

declare global {
  interface Window {
    REACT_APP_API_HOST?: string;
    REACT_APP_NAME?: string;
    REACT_APP_MODE?: string;
  }
}

const APP_NAME = window.REACT_APP_NAME ?? import.meta.env.VITE_APP_NAME;

export const APP = {
  NAME: APP_NAME ?? "WEBAPP",
  CURRENT_WEB_TYPE: import.meta.env.VITE_CURRENT_WEB_TYPE,
  POWERED_BY: import.meta.env.VITE_APP_POWERED_BY,
  POWERED_BY_WEBSITE: import.meta.env.VITE_APP_POWERED_BY_WEBSITE,
  GOOGLE_API_KEY: import.meta.env.VITE_APP_APP_GOOGLE_API_KEY,
  VERSION: packageJson.version,
  CURRENCY: import.meta.env.VITE_CURRENCY,
  NODE_ENV: import.meta.env.VITE_APP_NODE_ENV || "production",
  LOGO: import.meta.env.VITE_APP_LOGO,
  FAVICON: import.meta.env.VITE_APP_FAVICON_LOGO,
  LOGO_FORMAT: import.meta.env.VITE_LOGO_FORMAT,
};

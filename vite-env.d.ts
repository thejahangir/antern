/// <reference types="vite/client" />

/**
 * Typed Vite environment variables used in the app.
 * Extend this interface with any additional VITE_ variables you rely on.
 */
interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}


import type { ENVIRONMENT } from './projectDetails'

export declare global {
  interface Window {
    [ENVIRONMENT]: {
      preview: {
        domain?: string
        secret: string
      }
      shopify: {
        storeDomain: string
      }
    }
  }
}

const {
  SANITY_STUDIO_PROJECT_ID,
  SANITY_STUDIO_DATASET,
  SANITY_STUDIO_API_VERSION,
  SANITY_STUDIO_URL,
  SANITY_STUDIO_STEGA_ENABLED = false,
} = typeof document === 'undefined' ? process.env : window.ENV

export const projectId = SANITY_STUDIO_PROJECT_ID!
export const dataset = SANITY_STUDIO_DATASET!
export const studioUrl = SANITY_STUDIO_URL!
export const apiVersion = SANITY_STUDIO_API_VERSION || '2021-03-25'
export const stegaEnabled = SANITY_STUDIO_STEGA_ENABLED === 'true'

if (!projectId) throw new Error('Missing SANITY_STUDIO_PROJECT_ID in .env')
if (!apiVersion) throw new Error('Missing SANITY_STUDIO_API_VERSION in .env')
if (!dataset) throw new Error('Missing SANITY_STUDIO_API_VERSION in .env')
if (!studioUrl) throw new Error('Missing SANITY_STUDIO_DATASET in .env')
if (!stegaEnabled) throw new Error(`Missing SANITY_STUDIO_STEGA_ENABLED in .env`)

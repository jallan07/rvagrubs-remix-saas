// import getEnv from "#app/core/get-env.js";

// const {
//   SANITY_STUDIO_PROJECT_ID,
//   SANITY_STUDIO_DATASET,
//   SANITY_STUDIO_API_VERSION,
//   SANITY_STUDIO_URL,
//   SANITY_STUDIO_STEGA_ENABLED = false,
// } = getEnv();

// export const projectId = SANITY_STUDIO_PROJECT_ID!;
export const projectId = 'ihentlb6'
// export const dataset = SANITY_STUDIO_DATASET!;
export const dataset = 'production'
// export const studioUrl = SANITY_STUDIO_URL!;
export const studioUrl = 'http://localhost:3000'
// export const apiVersion = SANITY_STUDIO_API_VERSION!;
export const apiVersion = '2024-02-13'
// export const stegaEnabled = SANITY_STUDIO_STEGA_ENABLED === 'true';
export const stegaEnabled = true

if (!projectId) throw new Error('Missing SANITY_STUDIO_PROJECT_ID in .env')
if (!apiVersion) throw new Error('Missing SANITY_STUDIO_API_VERSION in .env')
if (!dataset) throw new Error('Missing SANITY_STUDIO_API_VERSION in .env')
if (!studioUrl) throw new Error('Missing SANITY_STUDIO_DATASET in .env')
if (!stegaEnabled) throw new Error(`Missing SANITY_STUDIO_STEGA_ENABLED in .env`)

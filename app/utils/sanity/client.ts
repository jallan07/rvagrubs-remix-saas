import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: 'production',
  apiVersion: '2024-03-11',
  stega: {
    enabled: true,
    studioUrl: 'https://rvagrubs.sanity.studio',
  },
  // Set to `true` for production environments
  useCdn: false,
})

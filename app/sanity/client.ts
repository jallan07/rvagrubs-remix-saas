import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '#app/sanity/projectDetails'

// Do not import this into client-side components unless lazy-loaded
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
  token: process.env.SANITY_STUDIO_READ_TOKEN,
})

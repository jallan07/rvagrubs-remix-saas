import { queryStore } from '#app/sanity/loader'
import { client } from '#app/sanity/client'
import type { loadQuery as sanityLoadQuery } from '@sanity/react-loader'

import { projectId } from '#app/sanity/projectDetails'
import { getSession } from '#app/sessions'
import getEnv from '#app/core/get-env'

export async function loadSanityQueryOptions(headers: Headers): Promise<{
  preview: boolean
  options: Parameters<typeof sanityLoadQuery>[2]
}> {
  const previewSession = await getSession(headers.get('Cookie'))

  const env = getEnv()

  // if environment is development, set the session token
  if (env.ENVIRONMENT === 'development' || env.NODE_ENV === 'development') {
    previewSession.set('projectId', projectId)
  }

  const preview = previewSession.get('projectId') === projectId

  if (preview && !process.env.SANITY_STUDIO_READ_TOKEN) {
    throw new Error(
      `Cannot activate preview mode without a "SANITY_STUDIO_READ_TOKEN" token in your environment variables. \n\n
      Create one with "Viewer" permissions at\n\n
      https://sanity.io/manage/project/${client.config().projectId}/api#tokens`,
    )
  }

  return {
    preview,
    options: {
      perspective: preview ? 'previewDrafts' : 'published',
      stega: preview ? { enabled: true, studioUrl: '/studio' } : undefined,
    },
  }
}

// In a perfect world, these could be dynamic based on the Request
// But because middleware hasn't landed in Remix
// And server.ts's context is messy to configure (except in Hydrogen!)
// We're overriding these in loadQueryOptions in every loader
const clientWithToken = client.withConfig({
  // Token required for when previewDrafts perspective is set in a loader
  token: process.env.SANITY_STUDIO_READ_TOKEN,
  // You do not want this enabled in production
  // This should be overridden when using loadQuery in a loader
  stega: process.env.NODE_ENV === 'development' && {
    enabled: true,
    studioUrl: '/studio',
  },
})

queryStore.setServerClient(clientWithToken)

export const { loadQuery: loadSanityQuery } = queryStore

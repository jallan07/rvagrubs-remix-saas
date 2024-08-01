// import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { defineConfig } from 'sanity'
import { debugSecrets } from '@sanity/preview-url-secret/sanity-plugin-debug-secrets'
import { schemaTypes } from '#app/sanity/schema'
import { projectId, dataset, apiVersion } from '#app/sanity/projectDetails'
import { presentationTool } from 'sanity/presentation'
import getEnv from '#app/core/get-env'
import { Logo } from './components/logo'
export const singletons = new Set(['settings'])
export const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const env = getEnv()

const config = defineConfig({
  projectId,
  dataset,
  apiVersion,
  title: 'rvagrubs',
  plugins: [
    structureTool(),
    presentationTool({
      title: 'Visual Editor',
      previewUrl: {
        origin: env.SITE_URL,
        previewMode: {
          enable: '/resources/preview',
        },
      },
    }),
    visionTool(),
    // scheduledPublishing(),
    debugSecrets(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    unstable_comments: {
      enabled: true,
    },
    actions: (input, context) =>
      singletons.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  basePath: '/studio',
})

export default config

// ...all other imports
import { defineConfig } from 'vite'
import { schemaTypes } from '#schemaTypes'

export default defineConfig({
  // ...all other config
  schema: {
    types: schemaTypes,
  },
})

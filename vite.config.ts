import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import { flatRoutes } from 'remix-flat-routes'
import { remixDevTools } from 'remix-development-tools'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  // server: {
  //   port: 3000,
  //   host: 'localhost',
  // },
  // build: {
  //   sourcemap: process.env.NODE_ENV === 'development',
  //   rollupOptions: {
  //     onLog(level, log, handler) {
  //       if (
  //         log.cause &&
  //         (log.cause as { message?: string }).message ===
  //           `Can't resolve original location of error.`
  //       ) {
  //         return
  //       }
  //       handler(level, log)
  //     },
  //   },
  // },
  // plugins: [
  //   remixDevTools(),
  //   remix({
  //     serverModuleFormat: 'esm',
  //     ignoredRouteFiles: ['**/.*'],
  //     routes: async (defineRoutes) => {
  //       return flatRoutes('routes', defineRoutes)
  //     },
  //   }),
  //   tsconfigPaths(),
  // ],
  plugins: [remix(), tsconfigPaths()],
  ssr: {
    noExternal: ['remix-i18next'],
  },
  server: {
    port: 3000,
    host: 'localhost',
  },
  build: {
    sourcemap: process.env.NODE_ENV === 'development',
    rollupOptions: {
      onLog(level, log, handler) {
        if (
          log.cause &&
          (log.cause as { message?: string }).message ===
            `Can't resolve original location of error.`
        ) {
          return
        }
        handler(level, log)
      },
    },
  },
})

/// <reference types="@remix-run/dev" />

declare global {
  type StringObject = Record<string, string>
  type NumberObject = Record<string, number>
  type UnknownObject = Record<string, unknown>
  type BooleanObject = Record<string, boolean>
  type UnixTimestamp = number

  type WithId<T> = T & {
    id: number | string
  }

  type Truthy<T> = false extends T
    ? never
    : 0 extends T
      ? never
      : '' extends T
        ? never
        : null extends T
          ? never
          : undefined extends T
            ? never
            : T

  type Falsy = false | 0 | '' | null | undefined
  type Maybe<T> = T | undefined

  type EmptyCallback = () => void

  type HttpMethod = `GET` | `POST` | `PUT` | 'PATCH' | 'DELETE' | 'HEAD'

  namespace Cypress {
    interface Chainable {
      cyGet(name: string): Chainable<JQuery>

      signIn(
        redirectPath?: string,
        credentials?: { email: string; password: string },
      ): void

      clearStorage(): void
      visitSignUpEmailFromInBucket(email: string): void

      resetDatabase(): void

      completeOnboarding(email: string, password: string): void
    }
  }

  // Based on how Remix recommends handling environment variables
  // https://remix.run/docs/en/main/guides/envvars
  interface Window {
    ENV: {
      SITE_URL: string
      ENVIRONMENT: string
      NODE_ENV: string
      SESSION_SECRET: string
      ENCRYPTION_SECRET: string
      DEV_HOST_URL: string
      PROD_HOST_URL: string
      DATABASE_URL: string
      RESEND_API_KEY: string
      GITHUB_CLIENT_ID: string
      GITHUB_CLIENT_SECRET: string
      STRIPE_PUBLIC_KEY: string
      STRIPE_SECRET_KEY: string
      STRIPE_WEBHOOK_ENDPOINT: string
      SANITY_STUDIO_PROJECT_ID: string
      SANITY_STUDIO_DATASET: string
      SANITY_STUDIO_PREVIEW_DOMAIN: string
      SANITY_STUDIO_PREVIEW_SECRET: string
      SANITY_STUDIO_SESSION_SECRET: string
      SANITY_STUDIO_STEGA_ENABLED: string
      SANITY_STUDIO_READ_TOKEN: string
      SANITY_STUDIO_WRITE_TOKEN: string
      SANITY_STUDIO_API_VERSION: string
      SANITY_STUDIO_URL: string
      HONEYPOT_ENCRYPTION_SEED: string
    }
  }
}

declare module 'react' {
  type FCC<Props = Record<string, unknown>> = React.FC<React.PropsWithChildren<Props>>
}

export {}

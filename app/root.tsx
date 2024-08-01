import type { MetaFunction, LinksFunction, LoaderFunctionArgs } from '@remix-run/node'
import type { Theme } from '#app/utils/hooks/use-theme'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { json } from '@remix-run/node'
import { useChangeLanguage } from 'remix-i18next/react'
import { AuthenticityTokenProvider } from 'remix-utils/csrf/react'
import { HoneypotProvider } from 'remix-utils/honeypot/react'
import { authenticator } from '#app/modules/auth/auth.server'
import { useNonce } from '#app/utils/hooks/use-nonce'
import { getHints } from '#app/utils/hooks/use-hints'
import { prisma } from '#app/utils/db.server'
import { getTheme, useTheme } from '#app/utils/hooks/use-theme'
import { getToastSession } from '#app/utils/toast.server'
import { csrf } from '#app/utils/csrf.server'
import { honeypot } from '#app/utils/honeypot.server'
import { combineHeaders, getDomainUrl } from '#app/utils/misc.server'
import { siteConfig } from '#app/utils/constants/brand'
import { useToast } from '#app/components/toaster'
import { Toaster } from '#app/components/ui/sonner'
import { ClientHintCheck } from '#app/components/misc/client-hints'
import { GenericErrorBoundary } from '#app/components/misc/error-boundary'
import i18nServer, { localeCookie } from '#app/modules/i18n/i18n.server'

import RootCSS from './root.css?url'

export const handle = { i18n: ['translation'] }

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data ? `${siteConfig.siteTitle}` : `Error | ${siteConfig.siteTitle}` },
    {
      name: 'description',
      content: siteConfig.siteDescription,
    },
  ]
}

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: RootCSS }]
}

export async function loader({ request }: LoaderFunctionArgs) {
  const sessionUser = await authenticator.isAuthenticated(request)
  const user = sessionUser?.id
    ? await prisma.user.findUnique({
        where: { id: sessionUser?.id },
        include: {
          image: { select: { id: true } },
          roles: { select: { name: true } },
        },
      })
    : null

  const locale = await i18nServer.getLocale(request)
  const { toast, headers: toastHeaders } = await getToastSession(request)
  const [csrfToken, csrfCookieHeader] = await csrf.commitToken()

  return json(
    {
      user,
      locale,
      toast,
      csrfToken,
      ENV: getBrowserEnvironment(),
      honeypotProps: honeypot.getInputProps(),
      requestInfo: {
        hints: getHints(request),
        origin: getDomainUrl(request),
        path: new URL(request.url).pathname,
        userPrefs: { theme: getTheme(request) },
      },
    } as const,
    {
      headers: combineHeaders(
        { 'Set-Cookie': await localeCookie.serialize(locale) },
        toastHeaders,
        csrfCookieHeader ? { 'Set-Cookie': csrfCookieHeader } : null,
      ),
    },
  )
}

function Document({
  children,
  nonce,
  lang = 'en',
  dir = 'ltr',
  theme = 'light',
  ENV = {},
}: {
  children: React.ReactNode
  nonce: string
  lang?: string
  dir?: 'ltr' | 'rtl'
  theme?: Theme
  ENV: any
}) {
  return (
    <html
      lang={lang}
      dir={dir}
      className={`${theme} overflow-x-hidden`}
      style={{ colorScheme: theme }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ClientHintCheck nonce={nonce} />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
      </head>
      <body className="h-auto w-full">
        {children}
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <Toaster closeButton position="bottom-center" theme={theme} />
      </body>
    </html>
  )
}

export default function AppWithProviders() {
  const { locale, toast, csrfToken, honeypotProps, ENV } = useLoaderData<typeof loader>()

  const nonce = useNonce()
  const theme = useTheme()

  // Updates the i18n instance language.
  useChangeLanguage(locale)

  // Renders toast (if any).
  useToast(toast)

  return (
    <Document nonce={nonce} theme={theme} lang={locale ?? 'en'} ENV={ENV}>
      <AuthenticityTokenProvider token={csrfToken}>
        <HoneypotProvider {...honeypotProps}>
          <Outlet />
        </HoneypotProvider>
      </AuthenticityTokenProvider>
    </Document>
  )
}

export function ErrorBoundary() {
  const nonce = useNonce()
  const theme = useTheme()

  return (
    <Document nonce={nonce} theme={theme} ENV={null}>
      <GenericErrorBoundary
        statusHandlers={{
          403: ({ error }) => (
            <p>You are not allowed to do that: {error?.data.message}</p>
          ),
        }}
      />
    </Document>
  )
}

function getBrowserEnvironment() {
  const env = process.env

  return {
    SITE_URL: env.SITE_URL,
    ENVIRONMENT: env.ENVIRONMENT,
    NODE_ENV: env.NODE_ENV,
    SESSION_SECRET: env.SESSION_SECRET,
    ENCRYPTION_SECRET: env.ENCRYPTION_SECRET,
    DEV_HOST_URL: env.DEV_HOST_URL,
    PROD_HOST_URL: env.PROD_HOST_URL,
    DATABASE_URL: env.DATABASE_URL,
    RESEND_API_KEY: env.RESEND_API_KEY,
    GITHUB_CLIENT_ID: env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: env.GITHUB_CLIENT_SECRET,
    STRIPE_PUBLIC_KEY: env.STRIPE_PUBLIC_KEY,
    STRIPE_SECRET_KEY: env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_ENDPOINT: env.STRIPE_WEBHOOK_ENDPOINT,
    SANITY_STUDIO_PROJECT_ID: env.SANITY_STUDIO_PROJECT_ID,
    SANITY_STUDIO_DATASET: env.SANITY_STUDIO_DATASET,
    SANITY_STUDIO_PREVIEW_DOMAIN: env.SANITY_STUDIO_PREVIEW_DOMAIN,
    SANITY_STUDIO_PREVIEW_SECRET: env.SANITY_STUDIO_PREVIEW_SECRET,
    SANITY_STUDIO_SESSION_SECRET: env.SANITY_STUDIO_SESSION_SECRET,
    SANITY_STUDIO_STEGA_ENABLED: env.SANITY_STUDIO_STEGA_ENABLED,
    SANITY_STUDIO_READ_TOKEN: env.SANITY_STUDIO_READ_TOKEN,
    SANITY_STUDIO_WRITE_TOKEN: env.SANITY_STUDIO_WRITE_TOKEN,
    SANITY_STUDIO_API_VERSION: env.SANITY_STUDIO_API_VERSION,
    SANITY_STUDIO_URL: env.SANITY_STUDIO_URL,
    HONEYPOT_ENCRYPTION_SEED: env.HONEYPOT_ENCRYPTION_SEED,
  }
}

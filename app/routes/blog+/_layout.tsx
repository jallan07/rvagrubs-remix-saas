import { Outlet, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { Navigation } from '#app/components/sections/Navigation.js'
import { authenticator } from '#app/modules/auth/auth.server.js'
import { LoaderFunctionArgs } from '@remix-run/router'

export const ROUTE_PATH = '/' as const

export async function loader({ request }: LoaderFunctionArgs) {
  const sessionUser = await authenticator.isAuthenticated(request)
  return json({ user: sessionUser } as const)
}

export default function Layout() {
  const { user } = useLoaderData<typeof loader>()
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

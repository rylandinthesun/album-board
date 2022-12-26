import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import type { MetaFunction } from "@remix-run/node"

import tailwindCss from "./tailwind.css"

export function links() {
  return [{ rel: "stylesheet", href: tailwindCss }]
}

export const meta: MetaFunction = () => {
  return { title: "Album Board" }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

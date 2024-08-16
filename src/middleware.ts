import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher(['/site', '/api/uploadthing'])
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)'])

export default clerkMiddleware((auth, req) => {
  const url = req.nextUrl
  const searchParams = url.searchParams.toString()
  const hostname = req.headers.get('host')

  const pathWithSearchParams = `${url.pathname}${
    searchParams ? `?${searchParams}` : ''
  }`

  // Gestion du sous-domaine
  const customSubDomain = hostname
    ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
    .filter(Boolean)[0]

  if (customSubDomain) {
    return NextResponse.rewrite(
      new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url),
    )
  }

  // Redirection pour les pages de connexion
  if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
    return NextResponse.redirect(new URL(`/agency/sign-in`, req.url))
  }

  if (
    url.pathname === '/' ||
    (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL('/site', req.url))
  }

  // Gestion des routes protégées
  if (isProtectedRoute(req)) {
    auth().protect()
  }

  return NextResponse.next() // Continuer si aucune condition spécifique n'est remplie
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}

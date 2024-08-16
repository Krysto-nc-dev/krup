import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ['/site', '/api/uploadthing'],
  async beforeAuth(auth, req) {
    // Logic before authentication, if needed
  },
  async afterAuth(auth, req) {
    const url = req.nextUrl;
    const searchParams = url.searchParams.toString();
    const hostname = req.headers.get('host');

    const pathWithSearchParams = `${url.pathname}${
      searchParams.length > 0 ? `?${searchParams}` : ''
    }`;

    // Check if there is a custom subdomain
    const customSubDomain = hostname
      ?.split(`.${process.env.NEXT_PUBLIC_DOMAIN}`)[0];

    if (customSubDomain && customSubDomain !== 'www') {
      return NextResponse.rewrite(
        new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url)
      );
    }

    // Redirection for sign-in or sign-up pages
    if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
      return NextResponse.redirect(new URL(`/agency/sign-in`, req.url));
    }

    // Redirect root to /site if on the main domain
    if (
      url.pathname === '/' ||
      (url.pathname === '/site' && hostname === process.env.NEXT_PUBLIC_DOMAIN)
    ) {
      return NextResponse.redirect(new URL('/site', req.url));
    }

    // Handle specific routes for agency or subaccount
    if (
      url.pathname.startsWith('/agency') ||
      url.pathname.startsWith('/subaccount')
    ) {
      return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url));
    }
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

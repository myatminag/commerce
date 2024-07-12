import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import type { NextRequestWithAuth } from 'next-auth/middleware';

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const token = await getToken({ req });

    const isAuthorized = Boolean(token);
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith('/sign-in')) {
      if (isAuthorized) {
        return NextResponse.redirect(new URL('/', req.url));
      }
      return null;
    }

    if (!isAuthorized) {
      return NextResponse.redirect(new URL('/sign-in', req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        /**
         * This is work-around for handling redirect on auth pages.
         * We return true here so that the middleware function above is always called.
         */
        return Promise.resolve(true);
      },
    },
  },
);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|forgot-password|reset-password).*)',
  ],
};

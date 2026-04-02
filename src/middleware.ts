import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const session = request.cookies.get('session');

  // Redirect to login if session cookie is not set and trying to access protected routes
  if (!session) {
    if (request.nextUrl.pathname.startsWith('/app') || request.nextUrl.pathname.startsWith('/portal') || request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }
    return NextResponse.next();
  }

  // If the user is authenticated, redirect them from auth pages to the app dashboard
  if (request.nextUrl.pathname.startsWith('/sign-in') || request.nextUrl.pathname.startsWith('/register')) {
    return NextResponse.redirect(new URL('/app/dashboard', request.url));
  }

  try {
    // TODO: Add a server-side check to verify the session cookie with Firebase Admin SDK
    // This would typically involve an API route or a server function that the middleware calls.
    // For now, we will assume the cookie is valid if it exists.
    return NextResponse.next();
  } catch (error) {
    // If verification fails, redirect to login
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
}

export const config = {
    matcher: ['/app/:path*', '/portal/:path*', '/admin/:path*', '/sign-in', '/register'],
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirects
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }
  if (pathname === '/portal') {
    return NextResponse.redirect(new URL('/portal/dashboard', request.url));
  }
  if (pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }
  if (pathname === '/app') {
    return NextResponse.redirect(new URL('/app/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/portal',
    '/admin',
    '/app',
  ],
};

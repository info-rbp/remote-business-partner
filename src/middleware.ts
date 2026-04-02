import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkRouteAccess } from './lib/route-guard';

// TODO: STAGE 2/3 - This middleware is for frontend routing and display logic only.
// It is NOT a substitute for backend authorization.
// Every API route must be independently authorized by the backend.
export function middleware(request: NextRequest) {
  // Centralize all access logic in the route guard
  const decision = checkRouteAccess(request);

  if (decision.allow) {
    return NextResponse.next();
  }

  if (decision.redirect) {
    return NextResponse.redirect(decision.redirect);
  }

  // As a fallback, redirect to the home page if access is denied but no redirect is specified
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api/ (API routes, which have their own auth)
     */
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
};

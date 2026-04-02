/**
 * @file Centralized route access control logic for the application.
 *
 * This module provides a structured way to handle route protection based on
 * session state, user roles, and the four-surface model. It is designed to be
 * easily swappable with real backend-driven session state in the future.
 */

import { NextRequest } from 'next/server';
import { getMockUser, hasRole, User, UserType } from './auth';
import { ROUTES, RouteDefinition } from '@/routes';
import { findRouteByPath } from './route-helpers';

interface RouteAccessDecision {
  allow: boolean;
  redirect?: URL;
}

// =================================================================
// ROUTE GROUP DEFINITIONS
// =================================================================

const isPath = (pathname: string, prefix: string) => pathname.startsWith(prefix);

const isPublicPath = (pathname: string) => !isPath(pathname, '/portal') && !isPath(pathname, '/admin') && !isPath(pathname, '/app');
const isPortalPath = (pathname: string) => isPath(pathname, '/portal');
const isAdminPath = (pathname: string) => isPath(pathname, '/admin');
const isAppPath = (pathname: string) => isPath(pathname, '/app');
const isAuthPath = (pathname: string) => pathname === ROUTES.public.signIn.path || pathname === ROUTES.public.register.path;

// =================================================================
// MAIN ACCESS CONTROL LOGIC
// =================================================================

export function checkRouteAccess(request: NextRequest): RouteAccessDecision {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get('session');
  
  // --- Handle base path redirects ---
  if (pathname === '/portal') return { allow: false, redirect: new URL(ROUTES.portal.dashboard.path, request.url) };
  if (pathname === '/admin') return { allow: false, redirect: new URL(ROUTES.admin.dashboard.path, request.url) };
  if (pathname === '/app') return { allow: false, redirect: new URL(ROUTES.app.dashboard.path, request.url) };

  // --- Unauthenticated User Logic ---
  if (!session) {
    if (isPortalPath(pathname) || isAdminPath(pathname) || isAppPath(pathname)) {
      // Trying to access a protected surface without a session
      return { allow: false, redirect: new URL(ROUTES.public.signIn.path, request.url) };
    }
    // Allow access to all public routes
    return { allow: true };
  }
  
  // --- Authenticated User Logic ---
  
  // TODO: Replace with a real user object fetched based on the session token.
  const mockUser = getMockUserFromPath(pathname);

  if (isAuthPath(pathname)) {
    // Authenticated users should be redirected away from sign-in/register
    return { allow: false, redirect: new URL(ROUTES.app.dashboard.path, request.url) };
  }
  
  // --- Role-based Access (Placeholder) ---
  if (!hasAccessToSurface(mockUser, pathname)) {
     // User does not have the correct type for the surface (e.g., client trying to access /admin)
     return { allow: false, redirect: new URL(ROUTES.app.dashboard.path, request.url) }; // Redirect to a safe default
  }

  const route = findRouteByPath(pathname);
  if (route && route.roles && !hasRole(mockUser, route.roles)) {
    // User does not have the required role for a specific page
    return { allow: false, redirect: new URL(ROUTES.app.dashboard.path, request.url) }; // Redirect to a safe default
  }

  // If all checks pass, allow access
  return { allow: true };
}

// =================================================================
// HELPER FUNCTIONS (Placeholders for Stage 1)
// =================================================================

/**
 * Mock function to simulate getting a different user based on the path.
 * This helps test the role-aware logic.
 */
function getMockUserFromPath(pathname: string): User {
    if (isAdminPath(pathname)) {
        return getMockUser('platformAdmin');
    }
    return getMockUser('clientOwner');
}


/**
 * Checks if the user's type allows access to the requested surface.
 */
function hasAccessToSurface(user: User, pathname: string): boolean {
    if (isAdminPath(pathname) && user.type !== UserType.Admin) {
        return false;
    }
    if ((isPortalPath(pathname) || isAppPath(pathname)) && user.type !== UserType.Client) {
        // This check could be more granular in a real app
        return false;
    }
    return true;
}

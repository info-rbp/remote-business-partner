/**
 * @file Helper functions for working with the centralized route contract.
 */

import { ROUTES, RouteDefinition, RouteGroup } from "@/routes";

/**
 * Recursively searches for a route definition by its path.
 *
 * @param path The path to search for.
 * @param routes The route group to search within.
 * @returns The matching RouteDefinition or null if not found.
 */
export function findRouteByPath(path: string, routes: RouteGroup = ROUTES): RouteDefinition | null {
  for (const key in routes) {
    const routeOrGroup = routes[key];

    // Check if it's a RouteDefinition and its path matches
    if (typeof routeOrGroup === 'object' && 'path' in routeOrGroup && routeOrGroup.path === path) {
      return routeOrGroup as RouteDefinition;
    }

    // If it's a nested RouteGroup, search recursively
    if (typeof routeOrGroup === 'object' && !('path' in routeOrGroup)) {
      const found = findRouteByPath(path, routeOrGroup as RouteGroup);
      if (found) {
        return found;
      }
    }
  }

  return null;
}

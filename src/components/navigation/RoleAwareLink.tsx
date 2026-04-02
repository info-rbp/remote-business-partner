'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { hasRole, User } from '@/lib/auth';
import { RouteDefinition } from '@/routes';
import { cn } from '@/lib/utils';

interface RoleAwareLinkProps {
  user: User;
  route: RouteDefinition;
  children: React.ReactNode;
}

export const RoleAwareLink = ({ user, route, children }: RoleAwareLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === route.path;

  if (route.roles && !hasRole(user, route.roles)) {
    return null; // Don't render the link if the user doesn't have the required roles
  }

  return (
    <Link
      href={route.path}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
        isActive && 'text-primary bg-muted'
      )}
    >
      {children}
    </Link>
  );
};

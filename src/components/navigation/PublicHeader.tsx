'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/routes';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Package2 } from 'lucide-react';

export default function PublicHeader() {
  const pathname = usePathname();

  const navLinks = [
    ROUTES.public.applications,
    ROUTES.public.membership,
    ROUTES.public.offers,
    ROUTES.public.resources,
    ROUTES.public.help,
    ROUTES.public.contact,
  ];

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
                href={ROUTES.public.home.path}
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
                <Package2 className="h-6 w-6" />
                <span className="">Remote Business Partner</span>
            </Link>
            {navLinks.map((route) => (
                <Link
                    key={route.path}
                    href={route.path}
                    className={cn(
                        'transition-colors hover:text-foreground',
                        pathname === route.path ? 'text-foreground' : 'text-muted-foreground'
                    )}
                >
                    {route.name}
                </Link>
            ))}
        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <div className="ml-auto flex-1 sm:flex-initial">
                <Link href={ROUTES.public.signIn.path}>
                    <Button variant="ghost">
                        {ROUTES.public.signIn.name}
                    </Button>
                </Link>
                <Link href={ROUTES.public.register.path}>
                    <Button>
                        {ROUTES.public.register.name}
                    </Button>
                </Link>
            </div>
        </div>
    </header>
  );
}

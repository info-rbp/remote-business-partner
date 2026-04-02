'use client';

import { getMockUser } from '@/lib/auth';
import { ROUTES } from '@/routes';
import { RoleAwareLink } from './RoleAwareLink';
import { Home, File, Users, Settings, BarChart, Shield, MessageSquare, DollarSign, Puzzle, Key, FileText } from 'lucide-react';
import Link from 'next/link';

const PortalSidebar = () => {
  const user = getMockUser('clientOwner'); // In a real app, you'd get the user from the session

  const navLinks = [
    { route: ROUTES.portal.dashboard, icon: <Home className="h-4 w-4" /> },
    { route: ROUTES.portal.membership, icon: <Users className="h-4 w-4" /> },
    { route: ROUTES.portal.billing, icon: <DollarSign className="h-4 w-4" /> },
    { route: ROUTES.portal.docushare, icon: <FileText className="h-4 w-4" /> },
    { route: ROUTES.portal.applications, icon: <Puzzle className="h-4 w-4" /> },
    { route: ROUTES.portal.support, icon: <MessageSquare className="h-4 w-4" /> },
    { route: ROUTES.portal.resources, icon: <File className="h-4 w-4" /> },
    { route: ROUTES.portal.profile, icon: <Users className="h-4 w-4" /> },
    { route: ROUTES.portal.team, icon: <Users className="h-4 w-4" /> },
    { route: ROUTES.portal.security, icon: <Shield className="h-4 w-4" /> },
  ];

  return (
    <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <span className="">Client Portal</span>
                </Link>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    {navLinks.map(({ route, icon }) => (
                        <RoleAwareLink key={route.path} user={user} route={route}>
                            {icon}
                            {route.name}
                        </RoleAwareLink>
                    ))}
                </nav>
            </div>
        </div>
    </div>
  );
};

export default PortalSidebar;

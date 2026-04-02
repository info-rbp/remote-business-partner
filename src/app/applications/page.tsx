import { PageHeader } from '@/components/page-header';
import { mockLaunchData } from '@/services/mock-data/launch';
import ModuleCard from '@/components/launch/ModuleCard';
import { LaunchableObject } from '@/lib/types';
import { AccountState } from '@/lib/state';
import { ROUTES } from '@/routes';

export default function ApplicationsPage() {
    // For the public page, we present all applications as "available" for discovery,
    // but the remediation will always point to signing in or signing up.
    const publicApplications: LaunchableObject[] = mockLaunchData.map(app => ({
        ...app,
        availability: AccountState.Active, // Override the state for public viewing
        remediation: {
            type: 'contact_support', // This is a generic type for the public page
            route: ROUTES.public.signIn.path,
            text: 'Sign In to Access'
        }
    }));

  return (
    <div className="flex flex-col gap-8 p-4 sm:p-6 lg:p-8">
      <PageHeader
        title="Our Applications"
        description="Discover our suite of powerful tools and services."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {publicApplications.map((app) => (
          <ModuleCard key={app.key} module={app} />
        ))}
      </div>
    </div>
  );
}

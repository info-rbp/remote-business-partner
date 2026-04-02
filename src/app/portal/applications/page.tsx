import { PageHeader } from '@/components/page-header';
import { mockLaunchData } from '@/services/mock-data/launch';
import ModuleCard from '@/components/launch/ModuleCard';

export default function ApplicationsPage() {
    // In a real app, this data would be fetched from the backend based on user entitlements
    const applications = mockLaunchData;

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Applications"
        description="Launch your available applications or manage your access."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {applications.map((app) => (
          <ModuleCard key={app.key} module={app} />
        ))}
      </div>
    </div>
  );
}

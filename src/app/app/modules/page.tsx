import { PageHeader } from '@/components/page-header';
import { mockLaunchData } from '@/services/mock-data/launch';
import ModuleCard from '@/components/launch/ModuleCard';

export default function ModulesPage() {
    // In a real app, this data would be fetched from the backend based on user entitlements
    const modules = mockLaunchData.filter(obj => obj.object_type === 'platform_module');

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Modules"
        description="Explore and manage your available modules."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard key={module.key} module={module} />
        ))}
      </div>
    </div>
  );
}

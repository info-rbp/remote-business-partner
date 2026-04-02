import ModuleCard from '@/components/app/ModuleCard';
import { mockLaunchData } from '@/lib/mock-launch-data';
import { LaunchableObject } from '@/lib/types';

async function getLaunchData(): Promise<LaunchableObject[]> {
    // In a real app, this would be an API call
    return Promise.resolve(mockLaunchData.filter(item => item.object_type === 'platform_module'));
}

export default async function DashboardPage() {
    const modules = await getLaunchData();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Application Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {modules.map((module) => (
                    <ModuleCard key={module.key} module={module} />
                ))}
            </div>
        </div>
    );
}
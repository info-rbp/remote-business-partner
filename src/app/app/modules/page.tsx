import ModuleCard from '@/components/app/ModuleCard';
import { mockLaunchData } from '@/lib/mock-launch-data';
import { LaunchableObject } from '@/lib/types';

async function getLaunchData(): Promise<LaunchableObject[]> {
    // In a real app, this would be an API call
    return Promise.resolve(mockLaunchData);
}

export default async function ModulesCataloguePage() {
    const modules = await getLaunchData();

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Platform Modules</h1>
                <p className="text-gray-500">Explore, manage, and launch your connected capabilities.</p>
            </header>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {modules.map((module) => (
                    <ModuleCard key={module.key} module={module} />
                ))}
            </div>
        </div>
    );
}
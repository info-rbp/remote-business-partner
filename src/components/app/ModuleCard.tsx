'use client';

import { LaunchableObject, AvailabilityState } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ModuleCardProps {
    module: LaunchableObject;
}

const getBadgeVariant = (availability: AvailabilityState) => {
    switch (availability) {
        case 'available':
            return 'default';
        case 'restricted':
            return 'destructive';
        case 'pending':
        case 'onboarding_required':
            return 'secondary';
        default:
            return 'outline';
    }
};


const ModuleCard = ({ module }: ModuleCardProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLaunch = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const readinessRes = await fetch(`/api/launch/readiness/${module.object_type}/${module.key}`);
            if (!readinessRes.ok) throw new Error('Failed to get launch readiness');
            const readinessData: LaunchableObject = await readinessRes.json();

            if (readinessData.availability === 'available') {
                const executeRes = await fetch('/api/launch/execute', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(readinessData.launch),
                });
                if (!executeRes.ok) throw new Error('Launch execution failed');
                const executeData = await executeRes.json();

                if (executeData.execution.method === 'native' && executeData.execution.route) {
                    router.push(executeData.execution.route);
                } else if (executeData.execution.target_url) {
                    window.location.href = executeData.execution.target_url;
                }
            } else if (readinessData.remediation?.route) {
                router.push(readinessData.remediation.route);
            } else {
                setError(readinessData.reason_codes.join(', ') || 'This module is not available.');
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    {module.name}
                    <Badge variant={getBadgeVariant(module.availability)}>{module.availability.replace(/_/g, ' ')}</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>Description for {module.name} module.</p>
                {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </CardContent>
            <CardFooter>
                <Button onClick={handleLaunch} disabled={isLoading}>
                    {isLoading ? 'Loading...' : (module.availability === 'available' ? 'Launch' : 'View Details')}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ModuleCard;
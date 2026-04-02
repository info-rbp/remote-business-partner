'use client';

import { LaunchableObject } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StateBadge } from '../feedback/StateBadge';
import { Rocket, ArrowRight, Wrench, Lock } from 'lucide-react';
import { Badge } from '../ui/badge';

interface ModuleCardProps {
    module: LaunchableObject;
}

const ModuleCard = ({ module }: ModuleCardProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLaunch = async () => {
        setIsLoading(true);
        
        const { availability, launch, remediation } = module;

        if (availability === 'active') {
            switch (launch.method) {
                case 'native':
                    if (launch.route) router.push(launch.route);
                    break;
                case 'sso':
                case 'redirect':
                    if (launch.target_url) window.location.href = launch.target_url;
                    break;
                default:
                    break;
            }
        } else if (remediation?.route) {
            router.push(remediation.route);
        }
    };

    const getButtonText = () => {
        if (module.availability === 'active') {
            return 'Launch';
        }
        if (module.remediation?.text) {
            return module.remediation.text;
        }
        return 'View Details';
    };

    const getButtonIcon = () => {
        switch (module.availability) {
            case 'active':
                return <Rocket className="mr-2 h-4 w-4" />;
            case 'maintenance':
                return <Wrench className="mr-2 h-4 w-4" />;
            case 'restricted':
                 return <Lock className="mr-2 h-4 w-4" />;
            default:
                return <ArrowRight className="mr-2 h-4 w-4" />;
        }
    }

    return (
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle>{module.name}</CardTitle>
                    <StateBadge state={module.availability} />
                </div>
                <CardDescription>{module.description}</CardDescription>
                <div className="flex gap-2 pt-2">
                    {module.ecosystem && (
                        <>
                            <Badge variant="secondary">{module.ecosystem.implementationType.replace(/_/g, ' ')}</Badge>
                            <Badge variant="outline">{module.ecosystem.treatmentType.replace(/_/g, ' ')}</Badge>
                        </>
                    )}
                </div>
            </CardHeader>
            <CardContent className="flex-1" />
            <CardFooter>
                <Button onClick={handleLaunch} disabled={isLoading} className="w-full">
                    {getButtonIcon()}
                    {isLoading ? 'Processing...' : getButtonText()}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ModuleCard;

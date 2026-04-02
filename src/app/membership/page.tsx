'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function MembershipPage() {
    const plans = [
        { id: 1, name: 'Basic', price: '$10/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
        { id: 2, name: 'Pro', price: '$20/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
        { id: 3, name: 'Enterprise', price: '$50/month', features: ['All Features', 'Dedicated Support'] },
    ];

  return (
    <div className="flex flex-col gap-8 p-4 sm:p-6 lg:p-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Membership Plans</h1>
        <p className="text-muted-foreground">
          Choose the plan that&apos;s right for you.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
            <Card key={plan.id}>
                <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>
                        {plan.price}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside">
                        {plan.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <Button className="mt-4">Choose Plan</Button>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}

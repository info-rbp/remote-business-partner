'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SubscriptionPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold">Subscription</h1>
        <p className="text-muted-foreground">
          Manage your subscription and billing details here.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>
            You are currently on the Pro Plan.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-2xl font-bold">$20/month</p>
            <p className="text-xs text-muted-foreground">
                Next billing date: August 30, 2024
            </p>
            <Button className="mt-4">Upgrade Plan</Button>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Team Management"
        description="Manage your team members and their permissions."
      />
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            This feature is coming soon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            You will be able to invite, remove, and manage team members from this page.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

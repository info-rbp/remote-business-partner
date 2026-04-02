'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormState } from 'react-dom';
import { saveProfile } from '@/app/actions';
import { PageHeader } from '@/components/page-header';

const initialState = {
  message: '',
};

export default function ProfilePage() {
    const [state, formAction] = useFormState(saveProfile, initialState);

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="My Profile"
        description="View and manage your personal information."
      />
      <Card>
        <CardHeader>
          <CardTitle>Profile Details</CardTitle>
          <CardDescription>
            Update your name and email address.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" defaultValue="John Doe" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" defaultValue="john.doe@example.com" />
            </div>
            <Button type="submit">Save Changes</Button>
            {state?.message && <p className="text-green-500">{state.message}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

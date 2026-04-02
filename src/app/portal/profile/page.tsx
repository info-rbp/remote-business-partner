'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect } from 'react';

const initialState = {
  message: null,
  errors: null,
};

async function updateProfile(prevState: any, formData: FormData) {
    'use server';
    console.log('Profile updated:', {
        name: formData.get('name'),
        email: formData.get('email'),
    });
    return { message: 'Profile updated successfully!' };
}

function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <Button type="submit" disabled={pending}>
        {pending ? 'Saving...' : 'Save Changes'}
      </Button>
    );
}

export default function ProfilePage() {
    const [state, formAction] = useFormState(updateProfile, initialState);

    useEffect(() => {
        if (state.message) {
          alert(state.message);
        }
      }, [state.message]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Your Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Edit your profile information</CardTitle>
        </CardHeader>
        <form action={formAction}>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" defaultValue="john.doe@example.com" />
                </div>
            </CardContent>
            <CardFooter>
                <SubmitButton />
            </CardFooter>
        </form>
      </Card>
    </div>
  );
}
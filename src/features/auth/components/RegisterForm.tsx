'use client'

import { useFormState } from 'react-dom'
import { registerUser, setSessionCookie } from '@/app/actions'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const initialState: any = {
  message: null,
  errors: {},
}

export default function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, initialState)
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // If the server action validated the form successfully, we perform the client-side Firebase Auth registration here.
    if (state?.clientActionRequired && state?.credentials) {
      const handleClientRegistration = async () => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, state.credentials.email, state.credentials.password);
            
            // Optionally set the users display name if they provided it
            if (state.credentials.name) {
                await updateProfile(userCredential.user, { displayName: state.credentials.name });
            }

            const idToken = await userCredential.user.getIdToken();
            
            // Send the token back to the server to create a secure session cookie
            const sessionResponse = await setSessionCookie(idToken);
            
            if(sessionResponse.success) {
                router.push('/portal/dashboard');
                router.refresh();
            } else {
                setFirebaseError("Account created, but failed to start a secure session. Please try logging in.");
            }
        } catch (error: any) {
            console.error("Firebase Registration Error", error);
            setFirebaseError(error.message || "Failed to register account.");
        } finally {
            setLoading(false);
        }
      }
      handleClientRegistration();
    }
  }, [state, router]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create an Account</CardTitle>
        <CardDescription>Enter your details below to register.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" />
              {state?.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Your email" />
               {state?.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Your password" />
               {state?.errors?.password && <p className="text-sm text-red-500">{state.errors.password[0]}</p>}
            </div>
            
            {firebaseError && (
                <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md">
                    {firebaseError}
                </div>
            )}
          </div>
          
          <Button className="w-full mt-6" disabled={loading}>
              {loading ? "Registering..." : "Register"}
          </Button>
          
          {state?.message && <p className="text-sm text-green-500 mt-4 text-center">{state.message}</p>}
        </form>
      </CardContent>
    </Card>
  );
}

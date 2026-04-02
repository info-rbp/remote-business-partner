'use client'

import { useFormState } from 'react-dom'
import { loginUser, setSessionCookie } from '@/app/actions'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const initialState = {
  message: null,
  errors: {},
}

export default function LoginForm() {
  const [state, formAction] = useFormState(loginUser, initialState)
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // If the server action validated the form successfully, we perform the client-side Firebase Auth login here.
    if (state?.clientActionRequired && state?.credentials) {
      const handleClientLogin = async () => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, state.credentials.email, state.credentials.password);
            const idToken = await userCredential.user.getIdToken();
            
            // Send the token back to the server to create a secure session cookie
            const sessionResponse = await setSessionCookie(idToken);
            
            if(sessionResponse.success) {
                router.push('/portal/dashboard');
                router.refresh();
            } else {
                setFirebaseError("Failed to create secure session.");
            }
        } catch (error: any) {
            console.error("Firebase Login Error", error);
            setFirebaseError(error.message || "Invalid email or password.");
        } finally {
            setLoading(false);
        }
      }
      handleClientLogin();
    }
  }, [state, router]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your credentials to sign in.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <div className="grid w-full items-center gap-4">
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
              {loading ? "Authenticating..." : "Sign In"}
          </Button>
          
          {state?.message && <p className="text-sm text-green-500 mt-4 text-center">{state.message}</p>}
        </form>
      </CardContent>
    </Card>
  );
}

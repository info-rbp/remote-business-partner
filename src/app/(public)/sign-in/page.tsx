
'use client'

import { useFormState } from 'react-dom'
import { loginUser } from '@/app/actions'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState = {
  message: null,
  errors: {},
}

export default function SignInPage() {
  const [state, formAction] = useFormState(loginUser, initialState)

  return (
    <div className="container mx-auto p-8 flex justify-center items-center">
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
                 {state.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" placeholder="Your password" />
                 {state.errors?.password && <p className="text-sm text-red-500">{state.errors.password[0]}</p>}
              </div>
            </div>
            <Button className="w-full mt-6">Sign In</Button>
            {state.message && <p className="text-sm text-green-500 mt-4 text-center">{state.message}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

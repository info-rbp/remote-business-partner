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

export default function LeadCapturePage() {
  return (
    <div className="flex flex-col gap-8 p-4 sm:p-6 lg:p-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Get Started</h1>
        <p className="text-muted-foreground">
          Sign up to learn more about our platform.
        </p>
      </header>
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Request a Demo</CardTitle>
          <CardDescription>
            Fill out the form below to request a demo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="company">Company</Label>
              <Input type="text" id="company" />
            </div>
            <Button type="submit">Request Demo</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

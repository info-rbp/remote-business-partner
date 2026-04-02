import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Platform Settings</h1>
        <p className="text-gray-500">Global configurations for integrations, webhooks, and security flags.</p>
      </header>
      
      <Card>
        <CardHeader>
          <CardTitle>Environment Flags</CardTitle>
          <CardDescription>Enable or disable feature sets platform-wide.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="mfa" className="text-base font-medium">Require Admin MFA</Label>
            <Switch id="mfa" checked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="signup" className="text-base font-medium">Public Registrations Open</Label>
            <Switch id="signup" checked />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Integrations & Webhooks</CardTitle>
          <CardDescription>Connect external systems and event listeners.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="payment-webhook">Payment Provider Webhook URL</Label>
            <Input id="payment-webhook" type="url" placeholder="https://api.example.com/webhooks/stripe" readOnly />
          </div>
          <Button variant="outline">Test Connection</Button>
        </CardContent>
      </Card>
    </div>
  );
}
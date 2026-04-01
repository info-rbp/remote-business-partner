
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SecurityPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Security</h1>
                <p className="text-gray-500">Manage your account security settings.</p>
            </header>

            {/* Change Password */}
            <Card>
                <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>It's a good idea to use a strong password that you're not using elsewhere.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input type="password" placeholder="Current Password" />
                    <Input type="password" placeholder="New Password" />
                    <Input type="password" placeholder="Confirm New Password" />
                    <Button>Change Password</Button>
                </CardContent>
            </Card>

            <Separator />

            {/* Two-Factor Authentication */}
            <Card>
                <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security to your account.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                    <div className="space-y-1">
                        <Label htmlFor="two-factor-auth" className="text-lg">Enable 2FA</Label>
                        <p className="text-sm text-gray-500">You will be asked for a code from your authenticator app when you sign in.</p>
                    </div>
                    <Switch id="two-factor-auth" />
                </CardContent>
            </Card>
        </div>
    );
}

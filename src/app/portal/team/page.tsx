import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeamPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Team Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is where you will be able to manage your team members, invite new users, and assign roles.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            This feature is coming soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
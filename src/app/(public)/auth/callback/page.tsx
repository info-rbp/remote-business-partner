
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthCallbackPage() {
  return (
    <div className="container mx-auto p-8 flex justify-center items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Authenticating...</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Please wait while we authenticate your session.</p>
        </CardContent>
      </Card>
    </div>
  );
}

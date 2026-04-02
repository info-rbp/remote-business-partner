
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const currentPlan = {
  name: "Premium Plan",
  price: "$99.99/month",
  renewalDate: "December 1, 2023",
};

const inclusions = [
  "Access to Sales Hub",
  "Access to Customer Support Desk",
  "Advanced Insights Module",
  "50 DocuShare Credits",
  "Priority Email & Chat Support",
  "Weekly Performance Reports"
];

export default function MembershipPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">My Membership</h1>
        <p className="text-gray-500">Manage your plan, review inclusions, and see billing details.</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-6">
            {/* Current Plan Details */}
            <Card>
                <CardHeader>
                    <CardTitle>Current Plan</CardTitle>
                </CardHeader>
                <CardContent>
                    <h2 className="text-xl font-semibold">{currentPlan.name}</h2>
                    <p className="text-3xl font-bold my-2">{currentPlan.price}</p>
                    <p className="text-sm text-gray-500">
                        Your plan renews on {currentPlan.renewalDate}.
                    </p>
                </CardContent>
            </Card>

            {/* Inclusions */}
            <Card>
                <CardHeader>
                    <CardTitle>Plan Inclusions</CardTitle>
                    <CardDescription>Features and services included in your current plan.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {inclusions.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
        
        <div className="lg:col-span-2">
            {/* Actions Card */}
             <Card className="bg-gray-50">
                <CardHeader>
                    <CardTitle>Manage Your Membership</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>Upgrade your plan to unlock more features and applications.</p>
                    <Button className="w-full">
                        Upgrade Plan <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-sm text-gray-500 pt-4">
                       Need to make other changes?
                    </p>
                    <Link href="/portal/billing" passHref>
                        <Button variant="outline" className="w-full">
                            View Billing Details
                        </Button>
                    </Link>
                     <Link href="/portal/support" passHref>
                        <Button variant="outline" className="w-full">
                            Contact Support
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}

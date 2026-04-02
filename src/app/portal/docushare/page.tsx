
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const includedDocuments = [
    { name: "Onboarding Checklist", type: "PDF" },
    { name: "Service Level Agreement", type: "PDF" }
];

const purchasedDocuments = [
    { name: "DocuShare Pro Template", type: "DOCX" },
    { name: "Financial Projection Model", type: "XLSX" }
];

export default function DocuSharePage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">DocuShare Access</h1>
        <p className="text-gray-500">Access your included and purchased documents.</p>
      </header>

      {/* Included in Your Membership */}
      <Card>
        <CardHeader>
          <CardTitle>Included in Your Membership</CardTitle>
          <CardDescription>These documents are part of your current plan.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-gray-200">
            {includedDocuments.map((doc, index) => (
              <li key={index} className="flex items-center justify-between py-3">
                <div className="flex items-center">
                    <FileText className="h-6 w-6 text-blue-500 mr-4" />
                    <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.type}</p>
                    </div>
                </div>
                <Button variant="outline" size="sm">
                   <Download className="mr-2 h-4 w-4" />
                   Download
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Your Purchased Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Your Purchased Documents</CardTitle>
           <CardDescription>Documents you have purchased individually.</CardDescription>
        </CardHeader>
        <CardContent>
           <ul className="divide-y divide-gray-200">
            {purchasedDocuments.map((doc, index) => (
              <li key={index} className="flex items-center justify-between py-3">
                <div className="flex items-center">
                    <FileText className="h-6 w-6 text-green-500 mr-4" />
                    <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.type}</p>
                    </div>
                </div>
                <Button variant="outline" size="sm">
                   <Download className="mr-2 h-4 w-4" />
                   Download
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

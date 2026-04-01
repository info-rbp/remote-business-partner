
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DocuSharePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto">
          {/* Hero Section */}
          <section className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto text-blue-600" />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mt-4">DocuShare</h1>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl mt-4">
              Securely share and manage your documents. Find what you need, when you need it.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="Search documents..." className="pl-10" />
              </div>
              <Button>
                <Upload className="mr-2 h-4 w-4" /> Upload
              </Button>
            </div>
          </section>

          {/* Featured Documents Section */}
          <section className="py-12">
            <h2 className="text-2xl font-bold mb-6">Featured Documents</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Onboarding Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">A comprehensive guide for new members.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Product Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Our vision for the future of the platform.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>API Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Integrate our platform with your existing tools.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Security Whitepaper</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Our commitment to data security and privacy.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recent Activity Section */}
          <section className="py-12">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <FileText className="h-6 w-6 text-gray-500" />
                <div>
                  <p>You uploaded <span className="font-semibold">"Project Proposal.pdf"</span></p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <FileText className="h-6 w-6 text-gray-500" />
                <div>
                  <p>Jane Doe shared <span className="font-semibold">"Marketing Plan Q3.docx"</span> with you</p>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

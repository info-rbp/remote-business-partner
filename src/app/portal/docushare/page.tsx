
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Folder, File, Search, Download } from "lucide-react";

const documents = [
    { name: "Onboarding Guide.pdf", type: "file", size: "2.5 MB", lastModified: "2023-10-26" },
    { name: "Q3 Financial Report.docx", type: "file", size: "1.2 MB", lastModified: "2023-10-25" },
    { name: "Marketing Proposal.pptx", type: "file", size: "5.8 MB", lastModified: "2023-10-24" },
    { name: "Project Alpha", type: "folder", files: 3, lastModified: "2023-10-23" },
    { name: "Archived Documents", type: "folder", files: 12, lastModified: "2023-10-20" },
];

export default function DocuSharePage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">DocuShare Access</h1>
                <p className="text-gray-500">Browse, search, and download your purchased or included documents.</p>
            </header>

            {/* Search and Upload */}
            <div className="flex justify-between items-center">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input placeholder="Search documents..." className="pl-10" />
                </div>
                <Button>Upload Document</Button>
            </div>

            {/* Document List */}
            <Card>
                <CardHeader>
                    <CardTitle>Your Documents</CardTitle>
                    <CardDescription>A list of all your accessible files and folders.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="divide-y divide-gray-200">
                        {documents.map(doc => (
                            <li key={doc.name} className="py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    {doc.type === 'folder' ? <Folder className="h-6 w-6 text-yellow-500" /> : <File className="h-6 w-6 text-blue-500" />}
                                    <div>
                                        <p className="font-semibold">{doc.name}</p>
                                        {doc.type === 'folder' ? 
                                            <p className="text-sm text-gray-500">{doc.files} files</p> : 
                                            <p className="text-sm text-gray-500">{doc.size}</p>}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-sm text-gray-500">Last modified: {doc.lastModified}</p>
                                    <Button variant="outline" size="icon">
                                        <Download className="h-4 w-4" />
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}

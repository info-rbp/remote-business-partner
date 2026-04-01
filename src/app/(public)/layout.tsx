
import React from "react";
import PublicHeader from "@/components/navigation/PublicHeader";
import PublicFooter from "@/components/navigation/PublicFooter";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <PublicFooter />
    </div>
  );
}

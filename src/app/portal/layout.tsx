import React from "react";
import PortalSidebar from "@/components/navigation/PortalSidebar";
import ClientHeader from "@/components/navigation/ClientHeader";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <PortalSidebar />
      <div className="flex-grow flex flex-col">
        <ClientHeader />
        <main className="flex-1 p-8 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}

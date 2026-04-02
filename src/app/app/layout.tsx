import React from "react";
import AppSidebar from "@/components/navigation/AppSidebar";
import AppHeader from "@/components/navigation/AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <div className="flex-grow flex flex-col">
        <AppHeader />
        <main className="flex-1 p-8 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}

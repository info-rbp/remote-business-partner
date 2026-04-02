import React from "react";
import AdminSidebar from "@/components/navigation/AdminSidebar";
import AdminHeader from "@/components/navigation/AdminHeader";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar />
      <div className="flex-grow flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-8 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}

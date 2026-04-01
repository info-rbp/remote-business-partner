
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* TODO: Add AdminSidebar */}
      <div className="flex-grow">
        {/* TODO: Add AdminHeader */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}

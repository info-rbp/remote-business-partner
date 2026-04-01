
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* TODO: Add AppSidebar */}
      <div className="flex-grow">
        {/* TODO: Add AppHeader */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}

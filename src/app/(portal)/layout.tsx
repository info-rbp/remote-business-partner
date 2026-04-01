
import React from "react";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* TODO: Add PortalSidebar */}
      <div className="flex-grow">
        {/* TODO: Add PortalHeader */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}

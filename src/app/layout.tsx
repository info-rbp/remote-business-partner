
import React from "react";
import type { Metadata } from 'next';
import PublicHeader from "@/components/navigation/PublicHeader";
import PublicFooter from "@/components/navigation/PublicFooter";

export const metadata: Metadata = {
    title: 'Remote Business Partner',
    description: 'The central hub for managing your applications, billing, and support.',
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <PublicFooter />
    </div>
  );
}

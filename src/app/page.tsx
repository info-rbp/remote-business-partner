'use client';

import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Welcome to <span className="text-blue-600">Remote Business Partner</span>
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl">
          Your all-in-one solution for managing your business remotely. We provide the tools and support you need to succeed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </main>
    </div>
  );
}

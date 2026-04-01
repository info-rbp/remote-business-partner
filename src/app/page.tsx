import PublicLayout from './(public)/layout';

export default function Page() {
  return (
    <PublicLayout>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Welcome to the Public Page</h1>
        <p className="mt-4">This is the main landing page for the application.</p>
      </main>
    </PublicLayout>
  );
}

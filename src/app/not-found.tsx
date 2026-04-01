
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-600">Oops! Page not found.</h2>
        <p className="mt-2 text-gray-500">We can't seem to find the page you're looking for.</p>
        <Link href="/">
          <Button className="mt-6">Go back home</Button>
        </Link>
      </div>
    </div>
  );
}

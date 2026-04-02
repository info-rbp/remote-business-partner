export default function AuthCallbackPage() {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Processing...</h1>
          <p>
            Please wait while we process your authentication. You will be redirected shortly.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            This page is used to handle callbacks from third-party authentication providers.
          </p>
        </div>
      </div>
    );
  }

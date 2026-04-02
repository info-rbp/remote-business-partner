import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Forgot Password</h1>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
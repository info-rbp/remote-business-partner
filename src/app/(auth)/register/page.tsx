import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Create an Account</h1>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}

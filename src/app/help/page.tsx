import SupportForm from '@/components/public/SupportForm';

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Help & Support</h1>
      <p className="text-center mb-8">
        Have a question or need help? Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <SupportForm />
    </div>
  );
}
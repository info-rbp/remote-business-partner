import ApplicationInterestForm from '@/components/public/ApplicationInterestForm';

export default function ApplicationsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Express Your Interest</h1>
      <p className="text-center mb-8">
        Interested in our upcoming programs? Fill out the form below to be the first to know when applications open.
      </p>
      <ApplicationInterestForm />
    </div>
  );
}
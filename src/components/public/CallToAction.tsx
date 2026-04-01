import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-xl mb-8">Join our platform today and take control of your financial future.</p>
      <Link href="/register" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold">Create an Account</Link>
    </section>
  );
};

export default CallToAction;

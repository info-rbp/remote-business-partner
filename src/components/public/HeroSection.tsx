import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <h1 className="text-5xl font-bold mb-4">Unlock Your Financial Potential</h1>
      <p className="text-xl mb-8">Join our platform to access exclusive offers, manage your applications, and grow your wealth.</p>
      <Link href="/register" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold">Get Started</Link>
    </section>
  );
};

export default HeroSection;

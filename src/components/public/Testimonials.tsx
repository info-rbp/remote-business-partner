const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Members Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"This platform has been a game-changer for my financial life. The personalized advice and exclusive offers have helped me save money and make smarter investments."</p>
            <p className="font-bold">- John Doe</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"I love the cashback credit card! It's so easy to use and I've already earned back a significant amount of money on my everyday purchases."</p>
            <p className="font-bold">- Jane Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

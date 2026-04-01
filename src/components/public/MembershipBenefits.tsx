const MembershipBenefits = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Membership Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Personalized Financial Advice</h3>
            <p className="text-gray-700">Get tailored advice from our team of experts to help you make informed financial decisions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Exclusive Partner Deals</h3>
            <p className="text-gray-700">Access special discounts and offers from our network of partners.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">24/7 Customer Support</h3>
            <p className="text-gray-700">Our dedicated support team is available around the clock to assist you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;

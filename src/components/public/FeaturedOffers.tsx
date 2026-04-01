import OfferCard from './OfferCard';

const featuredOffers = [
  {
    id: 1,
    title: 'High-Yield Savings Account',
    description: 'Earn a competitive interest rate on your savings with our secure and flexible account.',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Cashback Credit Card',
    description: 'Get rewarded for your everyday spending with our cashback credit card.',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Investment Portfolio Management',
    description: 'Let our experts manage your investments and help you achieve your financial goals.',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
];

const FeaturedOffers = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOffers;

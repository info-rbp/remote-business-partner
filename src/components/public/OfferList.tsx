import OfferCard from './OfferCard';

const offers = [
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
  {
    id: 4,
    title: 'Personal Loan',
    description: 'Get a personal loan with a competitive interest rate to consolidate debt or finance a major purchase.',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 5,
    title: 'Mortgage',
    description: 'Get a mortgage with a competitive interest rate to finance your dream home.',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 6,
    title: 'Auto Loan',
    description: 'Get an auto loan with a competitive interest rate to finance your new car.',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
];

const OfferList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default OfferList;

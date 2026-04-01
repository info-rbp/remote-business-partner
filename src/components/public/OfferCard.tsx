import Link from 'next/link';

interface Offer {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const OfferCard = ({ offer }: { offer: Offer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={offer.imageUrl} alt={offer.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
        <p className="text-gray-700 mb-4">{offer.description}</p>
        <Link href={`/offers/${offer.id}`} className="text-blue-600 font-bold">Learn More</Link>
      </div>
    </div>
  );
};

export default OfferCard;

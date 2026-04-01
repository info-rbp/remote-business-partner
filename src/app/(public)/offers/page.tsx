import OfferList from '@/components/public/OfferList';

export default function OffersPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Offers</h1>
        <OfferList />
      </div>
    </section>
  );
}

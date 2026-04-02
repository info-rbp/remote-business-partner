import Image from 'next/image';

const OurMission = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">Our mission is to provide our members with the tools, resources, and support they need to make informed financial decisions and achieve their financial goals. We are committed to transparency, integrity, and putting our members&apos; interests first.</p>
          </div>
          <div>
            <Image src="https://via.placeholder.com/500x300" alt="Our Mission" className="rounded-lg shadow-md" width={500} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

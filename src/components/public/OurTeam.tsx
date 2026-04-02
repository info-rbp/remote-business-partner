import Image from 'next/image';

const OurTeam = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" width={150} height={150} />
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-700">CEO</p>
          </div>
          <div className="text-center">
            <Image src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" width={150} height={150} />
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-700">CFO</p>
          </div>
          <div className="text-center">
            <Image src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" width={150} height={150} />
            <h3 className="text-xl font-bold">Peter Jones</h3>
            <p className="text-gray-700">COO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

const ContactForm = () => {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea id="message" rows={5} className="w-full px-3 py-2 border rounded-lg"></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold">Submit</button>
    </form>
  );
};

export default ContactForm;

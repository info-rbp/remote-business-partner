const Warning = ({ message }: { message: string }) => {
  return (
    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Warning:</strong>
      <span className="block sm:inline ml-2">{message}</span>
    </div>
  );
};

export default Warning;

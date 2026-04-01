const Loading = ({ message = 'Loading...' }: { message?: string }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      <p className="ml-2">{message}</p>
    </div>
  );
};

export default Loading;

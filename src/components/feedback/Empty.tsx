const Empty = ({ message = 'No items to display' }: { message?: string }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <p>{message}</p>
    </div>
  );
};

export default Empty;

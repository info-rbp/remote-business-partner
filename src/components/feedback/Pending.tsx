
import { Hourglass } from 'lucide-react';

interface PendingProps {
  message: string;
}

export default function Pending({ message }: PendingProps) {
  return (
    <div role="alert" className="p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg">
      <div className="flex">
        <div className="py-1"><Hourglass className="h-6 w-6 text-blue-500 mr-4" /></div>
        <div>
          <p className="font-bold">Pending</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}


import { PauseCircle } from 'lucide-react';

interface HoldProps {
  message: string;
}

export default function Hold({ message }: HoldProps) {
  return (
    <div role="alert" className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
      <div className="flex">
        <div className="py-1"><PauseCircle className="h-6 w-6 text-yellow-500 mr-4" /></div>
        <div>
          <p className="font-bold">On Hold</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}


import { ShieldAlert } from 'lucide-react';

interface RestrictedProps {
  message: string;
}

export default function Restricted({ message }: RestrictedProps) {
  return (
    <div role="alert" className="p-4 bg-orange-100 border border-orange-400 text-orange-700 rounded-lg">
      <div className="flex">
        <div className="py-1"><ShieldAlert className="h-6 w-6 text-orange-500 mr-4" /></div>
        <div>
          <p className="font-bold">Access Restricted</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}

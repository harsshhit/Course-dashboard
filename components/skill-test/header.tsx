import { Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title: string;
  subtitle: string;
  onUpdate: () => void;
}

export function Header({ title, subtitle, onUpdate }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-lg shadow-sm mb-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-lg">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
      <Button 
        onClick={onUpdate}
        className="mt-4 md:mt-0 bg-[#1E3A8A] hover:bg-blue-900 text-white"
      >
        Update
      </Button>
    </div>
  );
}
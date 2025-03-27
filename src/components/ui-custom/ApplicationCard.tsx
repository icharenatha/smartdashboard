
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface ApplicationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  iconBgClass?: string;
  onClick?: () => void;
}

const ApplicationCard = ({
  title,
  description,
  icon,
  className,
  iconBgClass = "bg-lpms-green",
  onClick,
}: ApplicationCardProps) => {
  return (
    <div 
      className={cn(
        "glassmorphism rounded-xl p-5 flex items-start space-x-4 cursor-pointer portal-card-hover group",
        className
      )}
      onClick={onClick}
    >
      <div className={cn("rounded-xl p-3 flex items-center justify-center", iconBgClass)}>
        {icon}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-lpms-blue">{title}</h3>
          <ExternalLink className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ApplicationCard;

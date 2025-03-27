
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PortalCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  className?: string;
  delay?: 'none' | 'short' | 'long';
  iconBgColor?: string;
}

const PortalCard = ({
  title,
  description,
  icon,
  to,
  className,
  delay = 'none',
  iconBgColor = 'bg-lpms-green',
}: PortalCardProps) => {
  const animationClass = 
    delay === 'none' 
      ? 'animate-fade-in' 
      : delay === 'short' 
        ? 'opacity-0 animate-fade-in-delay' 
        : 'opacity-0 animate-fade-in-delay-long';

  return (
    <Link 
      to={to}
      className={cn(
        "glassmorphism rounded-xl p-6 flex flex-col h-full portal-card-hover overflow-hidden group relative",
        animationClass,
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-lpms-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className={cn("rounded-full p-3 mb-4 w-14 h-14 flex items-center justify-center", iconBgColor)}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-lpms-blue">{title}</h3>
      <p className="text-gray-600 flex-grow mb-4">{description}</p>
      
      <div className="flex items-center text-lpms-green font-medium group-hover:font-semibold transition-all">
        <span>Explore</span>
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default PortalCard;

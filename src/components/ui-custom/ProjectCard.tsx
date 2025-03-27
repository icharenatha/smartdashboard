
import { ArrowRight, CheckCircle, ClockIcon, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  dueDate: string;
  teamSize: number;
  category: string;
  to: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  progress,
  dueDate,
  teamSize,
  category,
  to,
  className,
}: ProjectCardProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "glassmorphism rounded-xl p-5 flex flex-col space-y-3 portal-card-hover overflow-hidden group",
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs px-2 py-1 rounded-full bg-lpms-green/10 text-lpms-green font-medium inline-block mb-2">
            {category}
          </div>
          <h3 className="text-lg font-semibold text-lpms-blue">{title}</h3>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      
      <div className="flex flex-col space-y-1">
        <div className="flex justify-between text-xs text-gray-500">
          <span>Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className="bg-lpms-green h-1.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex justify-between pt-2 text-xs text-gray-500 border-t border-gray-100">
        <div className="flex items-center">
          <ClockIcon className="h-3 w-3 mr-1" />
          <span>{dueDate}</span>
        </div>
        <div className="flex items-center">
          <Users className="h-3 w-3 mr-1" />
          <span>{teamSize}</span>
        </div>
      </div>
      
      <div className="hidden group-hover:flex items-center pt-1 text-lpms-green text-xs font-medium">
        <span>View Details</span>
        <ArrowRight className="ml-1 h-3 w-3" />
      </div>
    </Link>
  );
};

export default ProjectCard;

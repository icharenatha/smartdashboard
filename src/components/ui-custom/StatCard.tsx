
import { cn } from '@/lib/utils';
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, trend, className }: StatCardProps) => {
  return (
    <div className={cn("rounded-xl p-4 glassmorphism flex flex-col", className)}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-500 font-medium text-sm">{title}</h3>
        <div className="p-2 rounded-lg bg-white/50">{icon}</div>
      </div>
      
      <div className="flex items-baseline">
        <span className="text-2xl font-bold text-lpms-blue mr-3">{value}</span>
        {trend && (
          <div className={cn(
            "text-xs font-medium flex items-center",
            trend.isPositive ? "text-lpms-green" : "text-red-500"
          )}>
            <span>{trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;

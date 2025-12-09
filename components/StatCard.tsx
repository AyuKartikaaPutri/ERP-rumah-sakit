import React from 'react';
import { DashboardStat } from '../types';

interface StatCardProps {
  stat: DashboardStat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const Icon = stat.icon;
  
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
          <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
        </div>
        <div className="p-3 bg-medical-50 rounded-xl group-hover:bg-medical-100 transition-colors">
          <Icon className="w-6 h-6 text-medical-600" />
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        <span className={`font-medium ${
          stat.trendDirection === 'up' ? 'text-green-600' : 
          stat.trendDirection === 'down' ? 'text-red-500' : 'text-slate-500'
        }`}>
          {stat.trend}
        </span>
        <span className="text-slate-400 ml-2">vs last week</span>
      </div>
    </div>
  );
};

export default StatCard;
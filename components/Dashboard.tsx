import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Activity, Users, CreditCard, Clock } from 'lucide-react';
import { revenueData, mockPatients } from '../services/mockData';
import StatCard from './StatCard';
import { DashboardStat } from '../types';

const Dashboard: React.FC = () => {
  const stats: DashboardStat[] = [
    { title: 'Bed Occupancy Rate', value: '87%', trend: '+2.4%', trendDirection: 'up', icon: Activity },
    { title: 'Daily Revenue', value: '$42,500', trend: '+12%', trendDirection: 'up', icon: CreditCard },
    { title: 'Total Patients', value: '1,240', trend: '-5%', trendDirection: 'down', icon: Users },
    { title: 'Avg Waiting Time', value: '18 min', trend: '-2 min', trendDirection: 'up', icon: Clock },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Revenue & Patient Flow</h3>
              <p className="text-sm text-slate-500">Weekly operational analytics</p>
            </div>
            <select className="bg-slate-50 border-none text-sm text-slate-600 font-medium rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-medical-200 cursor-pointer">
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  itemStyle={{ color: '#0f172a' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Widget - Queue/Bed Status */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 mb-1">Ward Occupancy</h3>
          <p className="text-sm text-slate-500 mb-6">Real-time availability</p>
          
          <div className="space-y-6 flex-1">
            {[
              { label: 'General Ward', val: 92, color: 'bg-red-500' },
              { label: 'ICU', val: 45, color: 'bg-medical-500' },
              { label: 'Private Rooms', val: 78, color: 'bg-gold-500' },
              { label: 'Pediatrics', val: 30, color: 'bg-green-500' }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-slate-700">{item.label}</span>
                  <span className="text-slate-500">{item.val}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className={`${item.color} h-2.5 rounded-full`} style={{ width: `${item.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-slate-800">12</p>
                <p className="text-xs text-slate-500">Pending Admissions</p>
              </div>
              <button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">
                View Queue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Recent Activity */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-slate-100">
         <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Admissions</h3>
         <div className="overflow-x-auto">
           <table className="w-full text-sm text-left">
             <thead className="text-xs text-slate-400 uppercase font-semibold bg-slate-50/50">
               <tr>
                 <th className="px-4 py-3 rounded-l-lg">Patient</th>
                 <th className="px-4 py-3">Admission ID</th>
                 <th className="px-4 py-3">Diagnosis</th>
                 <th className="px-4 py-3">Status</th>
                 <th className="px-4 py-3 rounded-r-lg text-right">Action</th>
               </tr>
             </thead>
             <tbody>
               {mockPatients.slice(0, 3).map((patient) => (
                 <tr key={patient.id} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors">
                   <td className="px-4 py-4 font-medium text-slate-700">{patient.name}</td>
                   <td className="px-4 py-4 text-slate-500">{patient.id}</td>
                   <td className="px-4 py-4 text-slate-500">{patient.diagnosis}</td>
                   <td className="px-4 py-4">
                     <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                       patient.status === 'Critical' ? 'bg-red-50 text-red-600 border-red-100' :
                       patient.status === 'Stable' ? 'bg-green-50 text-green-600 border-green-100' :
                       'bg-blue-50 text-blue-600 border-blue-100'
                     }`}>
                       {patient.status}
                     </span>
                   </td>
                   <td className="px-4 py-4 text-right">
                     <button className="text-medical-600 hover:text-medical-800 font-medium text-xs">Details</button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;
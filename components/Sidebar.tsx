import React from 'react';
import { LayoutDashboard, Users, Pill, Settings, Activity, FileText } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'patients', label: 'Patient Management', icon: Users },
    { id: 'pharmacy', label: 'Pharmacy & Inventory', icon: Pill },
    { id: 'reports', label: 'Medical Reports', icon: FileText },
    { id: 'monitoring', label: 'Live Monitoring', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full hidden md:flex">
      <div className="p-6 flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-medical-500 to-medical-600 rounded-lg flex items-center justify-center shadow-lg shadow-medical-500/30">
          <span className="text-white font-bold text-lg">A</span>
        </div>
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">Aura<span className="text-medical-600">Med</span></h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-medical-50 text-medical-900 font-medium shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-medical-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
              <span>{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-medical-600" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 text-white shadow-xl">
          <p className="text-xs text-slate-300 uppercase font-semibold mb-1">On Call</p>
          <p className="font-medium text-sm">Dr. A. Rahman</p>
          <p className="text-xs text-slate-400 mt-1">Chief Surgeon</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
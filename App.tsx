import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Pharmacy from './components/Pharmacy';
import { Bell, Search, UserCircle, Menu } from 'lucide-react';

// Placeholder for Patient Management Component (Simplified for this file size limit)
const PatientManagement = () => (
  <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
    <UserCircle className="w-16 h-16 mb-4 opacity-50" />
    <h3 className="text-xl font-semibold text-slate-600">Patient Management Module</h3>
    <p>Access EMR, Admissions, and History here.</p>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'pharmacy':
        return <Pharmacy />;
      case 'patients':
        return <PatientManagement />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
            <h3 className="text-xl font-semibold text-slate-600 capitalize">{activeTab}</h3>
            <p>This module is currently under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 z-10">
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
            <span className="ml-3 font-bold text-lg text-slate-800">AuraMed</span>
          </div>

          <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-96">
            <Search className="w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search patients, doctors, or records..." 
              className="bg-transparent border-none outline-none text-sm ml-2 w-full text-slate-600 placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-slate-700">Dr. A. Rahman</p>
                <p className="text-xs text-slate-400">Admin Access</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden ring-2 ring-white shadow-sm">
                <UserCircle className="w-full h-full text-slate-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
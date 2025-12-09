import React from 'react';
import { AlertTriangle, Package, Search, Filter } from 'lucide-react';
import { mockInventory } from '../services/mockData';

const Pharmacy: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Pharmacy Inventory</h2>
          <p className="text-slate-500">Track stock levels and expiry dates</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search medication..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-medical-200 w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="px-4 py-2 bg-medical-600 text-white rounded-xl text-sm font-medium hover:bg-medical-700 shadow-lg shadow-medical-500/20">
            Add Stock
          </button>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 font-medium">
            <tr>
              <th className="px-6 py-4">Medication Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Stock Level</th>
              <th className="px-6 py-4">Expiry Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockInventory.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <Package className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600">{item.category}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-slate-700">{item.stock}</span>
                    <span className="text-xs text-slate-400">{item.unit}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 font-mono text-xs">{item.expiryDate}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                    item.status === 'Expiring Soon' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                    item.status === 'Low Stock' ? 'bg-red-50 text-red-600 border-red-100' :
                    'bg-emerald-50 text-emerald-600 border-emerald-100'
                  }`}>
                    {item.status === 'Expiring Soon' && <AlertTriangle className="w-3 h-3" />}
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-medical-600 hover:text-medical-800 text-sm font-medium">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pharmacy;
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { DollarSign, TrendingUp, TrendingDown, FileText, Download, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { mockTransactions, financeMetrics } from '../services/mockData';

const Finance: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Finance & Accounting</h2>
          <p className="text-slate-500">Overview of financial health, cash flow, and reports</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-medical-600 text-white rounded-xl text-sm font-medium hover:bg-medical-700 shadow-lg shadow-medical-500/20 transition-all">
          <Download className="w-4 h-4" /> Download Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Revenue', value: '$828,000', sub: '+12% vs last month', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { title: 'Total Expenses', value: '$542,000', sub: '+5% vs last month', icon: TrendingDown, color: 'text-red-600', bg: 'bg-red-50' },
          { title: 'Net Profit', value: '$286,000', sub: '+18% profit margin', icon: TrendingUp, color: 'text-medical-600', bg: 'bg-medical-50' },
          { title: 'Pending Invoices', value: '$45,200', sub: '12 invoices overdue', icon: FileText, color: 'text-gold-500', bg: 'bg-yellow-50' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</h3>
            <p className="text-sm text-slate-500">{stat.title}</p>
            <p className="text-xs font-medium text-emerald-600 mt-2">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart - Income vs Expense */}
        <div className="lg:col-span-2 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-800">Cash Flow Analysis</h3>
            <select className="bg-slate-50 border-none text-sm text-slate-600 font-medium rounded-lg px-3 py-2 outline-none cursor-pointer">
              <option>Last 6 Months</option>
              <option>Year to Date</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={financeMetrics} barGap={8}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar name="Income" dataKey="income" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar name="Expense" dataKey="expense" fill="#f43f5e" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions List */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-800">Recent Transactions</h3>
            <button className="text-xs text-medical-600 font-semibold hover:text-medical-700">View All</button>
          </div>
          
          <div className="space-y-4 overflow-y-auto flex-1 pr-2 custom-scrollbar">
            {mockTransactions.map((trx) => (
              <div key={trx.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${trx.type === 'Income' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                    {trx.type === 'Income' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{trx.description}</p>
                    <p className="text-xs text-slate-500">{trx.date} • {trx.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-bold ${trx.type === 'Income' ? 'text-emerald-600' : 'text-slate-800'}`}>
                    {trx.type === 'Income' ? '+' : '-'}${trx.amount.toLocaleString()}
                  </p>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    trx.status === 'Completed' ? 'bg-slate-100 text-slate-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {trx.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
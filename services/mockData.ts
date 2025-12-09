import { Patient, InventoryItem, RevenueData, Transaction, FinanceMetric } from '../types';

export const mockPatients: Patient[] = [
  { id: 'P-001', name: 'Eleanor Sterling', age: 45, gender: 'Female', admissionDate: '2023-10-24', diagnosis: 'Hypertension', status: 'Stable', room: '304-A' },
  { id: 'P-002', name: 'Marcus Chen', age: 32, gender: 'Male', admissionDate: '2023-10-25', diagnosis: 'Post-Op ACL', status: 'Recovering', room: '201-B' },
  { id: 'P-003', name: 'Sarah Jenkins', age: 28, gender: 'Female', admissionDate: '2023-10-26', diagnosis: 'Acute Migraine', status: 'Discharged', room: '105-C' },
  { id: 'P-004', name: 'Albert Wesker', age: 58, gender: 'Male', admissionDate: '2023-10-26', diagnosis: 'Cardiac Arrhythmia', status: 'Critical', room: 'ICU-02' },
  { id: 'P-005', name: 'Diana Prince', age: 35, gender: 'Female', admissionDate: '2023-10-27', diagnosis: 'Influenza A', status: 'Stable', room: '305-A' },
];

export const mockInventory: InventoryItem[] = [
  { id: 'INV-001', name: 'Amoxicillin 500mg', stock: 1200, unit: 'Tablets', expiryDate: '2025-05-12', category: 'Antibiotic', status: 'Good' },
  { id: 'INV-002', name: 'Paracetamol IV', stock: 45, unit: 'Bottles', expiryDate: '2023-11-01', category: 'Analgesic', status: 'Expiring Soon' },
  { id: 'INV-003', name: 'Atorvastatin', stock: 15, unit: 'Boxes', expiryDate: '2024-02-20', category: 'Cardio', status: 'Low Stock' },
  { id: 'INV-004', name: 'Vitamin C 1000mg', stock: 500, unit: 'Tablets', expiryDate: '2024-12-30', category: 'Supplement', status: 'Good' },
];

export const revenueData: RevenueData[] = [
  { name: 'Mon', revenue: 45000, patients: 120 },
  { name: 'Tue', revenue: 52000, patients: 135 },
  { name: 'Wed', revenue: 48000, patients: 125 },
  { name: 'Thu', revenue: 61000, patients: 150 },
  { name: 'Fri', revenue: 55000, patients: 142 },
  { name: 'Sat', revenue: 67000, patients: 160 },
  { name: 'Sun', revenue: 58000, patients: 145 },
];

export const mockTransactions: Transaction[] = [
  { id: 'TRX-9801', date: '2023-10-27', description: 'Insurance Claim Payout - Allstate', category: 'Insurance', amount: 15400, type: 'Income', status: 'Completed' },
  { id: 'TRX-9802', date: '2023-10-27', description: 'Pharmacy Supplier Payment', category: 'Inventory', amount: 3200, type: 'Expense', status: 'Completed' },
  { id: 'TRX-9803', date: '2023-10-26', description: 'Patient Payment - P-003', category: 'Service Fee', amount: 850, type: 'Income', status: 'Completed' },
  { id: 'TRX-9804', date: '2023-10-26', description: 'Maintenance Services', category: 'Facilities', amount: 1200, type: 'Expense', status: 'Pending' },
  { id: 'TRX-9805', date: '2023-10-25', description: 'Monthly Staff Payroll', category: 'Salary', amount: 45000, type: 'Expense', status: 'Completed' },
];

export const financeMetrics: FinanceMetric[] = [
  { month: 'Jun', income: 120000, expense: 85000 },
  { month: 'Jul', income: 135000, expense: 90000 },
  { month: 'Aug', income: 128000, expense: 82000 },
  { month: 'Sep', income: 142000, expense: 95000 },
  { month: 'Oct', income: 155000, expense: 98000 },
  { month: 'Nov', income: 148000, expense: 92000 },
];
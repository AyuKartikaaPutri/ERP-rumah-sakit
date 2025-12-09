import React from 'react';

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  admissionDate: string;
  diagnosis: string;
  status: 'Critical' | 'Stable' | 'Recovering' | 'Discharged';
  room: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  stock: number;
  unit: string;
  expiryDate: string;
  category: 'Antibiotic' | 'Analgesic' | 'Cardio' | 'Supplement';
  status: 'Good' | 'Low Stock' | 'Expiring Soon' | 'Expired';
}

export interface DashboardStat {
  title: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down' | 'neutral';
  icon: React.ElementType;
}

export interface RevenueData {
  name: string;
  revenue: number;
  patients: number;
}
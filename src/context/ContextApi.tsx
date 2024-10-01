'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface DataContextType {
  data: string | null;
  setData: React.Dispatch<React.SetStateAction<string | null>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('DATA');
      return savedData ? JSON.parse(savedData) : null;
    }
    return null;
  });

  useEffect(() => {
    if (data) {
      localStorage.setItem('DATA', JSON.stringify(data));
    }
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

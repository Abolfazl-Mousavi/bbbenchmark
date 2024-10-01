import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, initialValue: string | null) => {
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    if (storedValue !== null) {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
};

export default useLocalStorage;

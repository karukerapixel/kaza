import { useState } from 'react';

export const useLocalStorage = <T extends { id: string | number }>(
  key: string
) => {
  const [storedValue, setStoredValue] = useState<T[] | null>(() => {
    try {
      const item = localStorage.getItem(key);
      console.log(item)
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error retrieving localStorage key:', error);
      return null;
    }
  });

  const save = (value: T[]) => {
    try {
      const valueToStore = JSON.stringify(value);
      localStorage.setItem(key, valueToStore);
      setStoredValue(value);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  const addItem = (item: T) => {
    try {
      const currentData = storedValue ?? [];
      const updatedData = [...currentData, item];
      localStorage.setItem(key, JSON.stringify(updatedData));
      setStoredValue(updatedData);
    } catch (error) {
      console.error('Error adding item to localStorage:', error);
    }
  };

  const removeById = (id: string | number) => {
    try {
      if (!storedValue) return;

      const updatedData = storedValue.filter((item) => item.id !== id);

      localStorage.setItem(key, JSON.stringify(updatedData));
      setStoredValue(updatedData);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  };

  return {
    storedValue,
    save,
    addItem,
    removeById,
  };
};

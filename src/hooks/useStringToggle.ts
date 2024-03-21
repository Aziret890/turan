'use client';
import { useState } from 'react';

const useStringToggle = <T, P>(initialValue: T, alternateValue: P): [T | P, () => void] => {
  const [currentValue, setCurrentValue] = useState<T | P>(initialValue);

  const toggleValue = () => {
    setCurrentValue((prevValue) => (prevValue === initialValue ? alternateValue : initialValue));
  };

  return [currentValue, toggleValue];
};

export default useStringToggle;

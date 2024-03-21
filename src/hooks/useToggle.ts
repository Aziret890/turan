'use client';
import { useState } from 'react';

const useToggle = (initialValue: boolean) => {
  const [currentValue, setCurrentValue] = useState(initialValue);

  const toggleValue = (d?: boolean) => {
    setCurrentValue((prev) => (d !== undefined ? d : !prev));
  };

  return [currentValue, toggleValue];
};

export default useToggle;

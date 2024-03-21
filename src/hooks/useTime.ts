'use client';
import React from 'react';

interface UseTimeProps {
  initialTime: number;
  onTimeZero?: () => void;
}

export const useTime = ({ initialTime, onTimeZero }: UseTimeProps): number => {
  const [time, setTime] = React.useState<number>(initialTime);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (initialTime === 0) {
        return;
      }
      setTime((prevTime) => {
        const nextTime = prevTime - 1;

        if (nextTime <= 0) {
          clearInterval(intervalId);
          onTimeZero && onTimeZero();
        }

        return nextTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [onTimeZero, initialTime]);

  return time;
};

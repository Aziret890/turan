'use client';
import { useState, useEffect, RefObject, useCallback } from 'react';

const useMousePosition = (elementRef: RefObject<HTMLElement>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    },
    [elementRef]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [elementRef, handleMouseMove]);

  return position;
};

export default useMousePosition;

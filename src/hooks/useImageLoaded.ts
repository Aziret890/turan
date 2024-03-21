'use client';
import { useState, useEffect } from 'react';

export const useImageLoaded = (src: string, callback?: () => void): boolean => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    const handleImageLoad = (): void => {
      setIsLoaded(true);
      if (callback) {
        callback();
      }
    };

    img.addEventListener('load', handleImageLoad);

    return () => {
      img.removeEventListener('load', handleImageLoad);
    };
  }, [src, callback]);

  return isLoaded;
};

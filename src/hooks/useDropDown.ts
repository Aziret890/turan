'use client';
import { useState, useCallback, useEffect, useRef } from 'react';
import { IconType } from 'react-icons';

export interface UseDropDownProps {
  initialSelectedItem?: string | IconType | JSX.Element;
  items: string[];
}

export const useDropDown = ({ initialSelectedItem, items }: UseDropDownProps) => {
  const [selectedItem, setSelectedItem] = useState<string | JSX.Element | undefined>(() => {
    if (typeof initialSelectedItem === 'undefined') {
      const storedItem = JSON.parse(localStorage.getItem('selectedItem') || '');
      return storedItem || undefined;
    }

    if (typeof initialSelectedItem === 'function') {
      return initialSelectedItem({});
    }
    return initialSelectedItem;
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleSelectItem = useCallback(
    (data?: string) => {
      if (typeof selectedItem === 'string') {
        setSelectedItem(data);
        localStorage.setItem('selectedItem', data || '');
      }
      setIsOpen(false);
    },
    [setIsOpen, selectedItem]
  );

  const toggleDropDown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, [setIsOpen]);

  const closeDropDown = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleDocumentClick = useCallback(
    (event: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        closeDropDown();
      }
    },
    [closeDropDown]
  );

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [handleDocumentClick]);

  useEffect(() => {
    if (typeof initialSelectedItem === 'string') {
      localStorage.setItem('selectedItem', initialSelectedItem);
    }
  }, [initialSelectedItem]);

  return {
    selectedItem,
    items,
    isOpen,
    closeDropDown,
    toggleDropDown,
    onSelectItem: handleSelectItem,
    dropDownRef,
  };
};

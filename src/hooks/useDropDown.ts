import { useState, useCallback, useEffect, useRef } from "react";

export interface UseDropDownProps {
  initialSelectedItem?: string;
  items: string[];
  storage?: string | null;
}

export const useDropDown = ({
  initialSelectedItem,
  items,
  storage = null,
}: UseDropDownProps) => {
  const [selectedItem, setSelectedItem] = useState(initialSelectedItem);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleSelectItem = useCallback(
    (data: string) => {
      if (storage !== null) {
        localStorage.setItem(storage, JSON.stringify(data));
      }
      setSelectedItem(data);
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
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        closeDropDown();
      }
    },
    [closeDropDown]
  );

  useEffect(() => {
    if (storage !== null) {
      const dataWithStorage =
        JSON.parse(localStorage.getItem(storage)!) || initialSelectedItem;
      setSelectedItem(dataWithStorage);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

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

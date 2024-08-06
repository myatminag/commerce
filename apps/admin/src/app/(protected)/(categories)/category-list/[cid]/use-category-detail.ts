import { useState } from 'react';

export const useCategoryDetail = () => {
  const [isSelected, setIsSelected] = useState<number>(1);

  return {
    isSelected,
    setIsSelected,
  };
};

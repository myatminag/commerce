import { useState } from 'react';

export const useViewType = () => {
  const [viewType, setViewType] = useState<'rows' | 'cards'>('rows');

  const handleToggleViewType = () => {
    setViewType((prevView) => (prevView === 'rows' ? 'cards' : 'rows'));
  };

  return {
    viewType,
    handleToggleViewType,
  };
};

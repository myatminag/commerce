import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useViewType = () => {
  const searchParams = useSearchParams();

  const viewType = (searchParams.get('view') as 'cards' | 'rows') || 'rows';

  const createQueryString = useCallback(
    (value: 'rows' | 'cards') => {
      const params = new URLSearchParams(searchParams.toString());

      params.set('view', value);

      return params.toString();
    },
    [searchParams],
  );

  return {
    viewType,
    createQueryString,
  };
};

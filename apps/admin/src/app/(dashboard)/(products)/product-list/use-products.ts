import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import { useProductList } from '@apis/product/product-list';

export const useProducts = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get('q');

  const { isLoading, isError, data } = useProductList({
    name: query,
    offset: 0,
    limit: 10,
  });

  const handleSearchProducts = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return {
    searchParams,
    isLoading,
    isError,
    data,
    handleSearchProducts,
  };
};

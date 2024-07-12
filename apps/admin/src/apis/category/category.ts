import { useQuery } from '@tanstack/react-query';

import { baseUrlService } from '@apis/http-service';

import { categoriesKeys } from './keys/keys';

interface CategoriesRes {
  parentId: string | null;
}

export const useCategories = ({ parentId }: CategoriesRes) => {
  return useQuery({
    queryKey: categoriesKeys.categoryList(parentId),
    queryFn: async () => {
      return baseUrlService.get('/categories').then((res) => res.data);
    },
  });
};

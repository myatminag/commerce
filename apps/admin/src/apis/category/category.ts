import { useQuery } from '@tanstack/react-query';

import { categoriesKeys } from './keys/keys';
import { baseUrlService } from '@apis/http-service';

interface CategoriesRes {
  parentId: string | null;
}

export const useCategories = ({ parentId }: CategoriesRes) => {
  return useQuery({
    queryKey: categoriesKeys.categoryList(parentId),
    queryFn: async () => {
      return await baseUrlService.get('/categories').then((res) => res.data);
    },
  });
};

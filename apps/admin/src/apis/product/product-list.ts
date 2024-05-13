import { useQuery } from '@tanstack/react-query';

import { productListKeys } from './keys/keys';
import { baseUrlService } from '@apis/http-service';

interface ProductListProps {
  name: string | null;
  offset: number;
  limit: number;
}

export interface ProductListRes {
  offset: number;
  nextOffset: any;
  limit: number;
  totalNumberOfItems: number;
  items: {
    id: string;
    name: string;
    sku: string;
    isAvailable: boolean;
    qty: number;
    price: string;
    brand: {
      id: string;
      name: string;
    };
    category: {
      id: string;
      name: string;
    };
    images: {
      id: string;
      index: number;
      image: string;
      type: string;
    }[];
  }[];
}

export const useProductList = ({ name, offset, limit }: ProductListProps) => {
  return useQuery<ProductListRes>({
    queryKey: productListKeys.productList(name, offset, limit),
    queryFn: async () => {
      return await baseUrlService
        .get('/manage/products', {
          params: {
            name,
            offset,
            limit,
          },
        })
        .then((res) => res.data);
    },
  });
};

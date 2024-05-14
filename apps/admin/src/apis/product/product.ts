import { useQuery } from '@tanstack/react-query';

import { productsKeys } from './keys/keys';
import { baseUrlService } from '@apis/http-service';

interface ProductsProps {
  name: string | null;
  offset: number;
  limit: number;
}

export interface ProductsRes {
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

export const useProducts = ({ name, offset, limit }: ProductsProps) => {
  return useQuery<ProductsRes>({
    queryKey: productsKeys.productList(name, offset, limit),
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

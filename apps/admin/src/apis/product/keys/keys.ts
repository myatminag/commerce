export const productListKeys = {
  product: ['product'] as const,
  productList: (name: string | null, offset: number, limit: number) =>
    [...productListKeys.product, name, offset, limit] as const,
};

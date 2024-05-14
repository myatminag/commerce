export const productsKeys = {
  products: ['product'] as const,
  productList: (name: string | null, offset: number, limit: number) =>
    [...productsKeys.products, name, offset, limit] as const,
};

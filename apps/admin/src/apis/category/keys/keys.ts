export const categoriesKeys = {
  categories: ['categories'] as const,
  categoryList: (parentId: string | null) =>
    [...categoriesKeys.categories, parentId] as const,
};

import { useViewType } from '@hooks/use-view-type';

export const useCategoryList = () => {
  const { viewType, createQueryString } = useViewType();

  return {
    viewType,
    createQueryString,
  };
};

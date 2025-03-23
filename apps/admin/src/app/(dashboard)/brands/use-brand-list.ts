import { useViewType } from '@hooks/use-view-type';

export const useBrandList = () => {
  const { viewType, createQueryString } = useViewType();

  return {
    viewType,
    createQueryString,
  };
};

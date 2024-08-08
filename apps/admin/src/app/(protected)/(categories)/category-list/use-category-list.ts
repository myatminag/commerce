import { useViewType } from '@hooks/use-view-type';

export const useCategoryList = () => {
  const { viewType, handleToggleViewType } = useViewType();

  return {
    viewType,
    handleToggleViewType,
  };
};

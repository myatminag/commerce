import { useViewType } from '@hooks/use-view-type';

export const useBrandList = () => {
  const { viewType, handleToggleViewType } = useViewType();

  return {
    viewType,
    handleToggleViewType,
  };
};

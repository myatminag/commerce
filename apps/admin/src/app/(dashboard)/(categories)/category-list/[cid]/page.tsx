import type { Metadata } from 'next';

import CategoryInfo from './components/category-info';
import CategoryList from './components/category-list';
import { SectionWrapper } from '@components/section-wrapper';

export const metadata: Metadata = {
  title: 'Category Detail',
};

const CategoryDetail = () => {
  return (
    <SectionWrapper className="hidden lg:grid lg:grid-cols-4 lg:gap-x-6 lg:pe-6 lg:ps-[265px]">
      <div className="col-span-1 overflow-y-auto">
        <CategoryList />
      </div>
      <div className="col-span-3 min-h-[calc(100vh-140px)] rounded-lg bg-white p-5">
        <CategoryInfo />
      </div>
    </SectionWrapper>
  );
};

export default CategoryDetail;

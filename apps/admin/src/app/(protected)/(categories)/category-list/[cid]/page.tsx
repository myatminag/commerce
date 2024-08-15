import type { Metadata } from 'next';

import CategoryInfo from './components/category-info';
import CategoryList from './components/category-list';

export const metadata: Metadata = {
  title: 'Category Detail',
};

const CategoryDetail = () => {
  return (
    <section className="hidden lg:grid lg:grid-cols-4 lg:gap-x-6 lg:px-6 lg:pt-6">
      <div className="col-span-1 overflow-y-auto">
        <CategoryList />
      </div>
      <div className="col-span-3 min-h-[calc(100vh-160px)] rounded-lg bg-white p-5">
        <CategoryInfo />
      </div>
    </section>
  );
};

export default CategoryDetail;

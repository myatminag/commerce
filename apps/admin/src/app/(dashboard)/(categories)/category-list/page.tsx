import { Metadata } from 'next';
import { Suspense } from 'react';

import CategoryTable from './components/category-table';

export const metadata: Metadata = {
  title: 'Categories',
};

const Page = () => {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-4 p-6 lg:flex">
      <Suspense>
        <CategoryTable />
      </Suspense>
    </div>
  );
};

export default Page;

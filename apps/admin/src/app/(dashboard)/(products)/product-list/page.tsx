import { Metadata } from 'next';
import { Suspense } from 'react';

import ProductTable from './components/product-table';

export const metadata: Metadata = {
  title: 'Product List',
};

const Page = () => {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-4 p-6 md:flex">
      <Suspense>
        <ProductTable />
      </Suspense>
    </div>
  );
};

export default Page;

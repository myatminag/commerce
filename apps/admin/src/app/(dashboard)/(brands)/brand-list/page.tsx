import { Metadata } from 'next';
import { Suspense } from 'react';

import BrandTable from './components/brand-table';

export const metadata: Metadata = {
  title: 'Brands',
};

const Page = () => {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-4 p-6 lg:flex">
      <Suspense>
        <BrandTable />
      </Suspense>
    </div>
  );
};

export default Page;

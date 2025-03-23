import type { Metadata } from 'next';
import { Suspense } from 'react';

import OrderTable from './components/order-table';

export const metadata: Metadata = {
  title: 'Orders',
};

const Page = () => {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-4 p-6 lg:flex">
      <Suspense>
        <OrderTable />
      </Suspense>
    </div>
  );
};

export default Page;

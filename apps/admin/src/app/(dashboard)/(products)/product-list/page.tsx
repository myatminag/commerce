import { Metadata } from 'next';

import ProductTable from './components/product-table';

export const metadata: Metadata = {
  title: 'Product List',
};

const Page = () => {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-4 p-6 md:flex">
      <ProductTable />
    </div>
  );
};

export default Page;

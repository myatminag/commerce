import { Metadata } from 'next';

import NewProductForm from './components/new-product-form';

export const metadata: Metadata = {
  title: 'New Product',
};

const Page = () => {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-4 p-6 lg:flex">
      <NewProductForm />
    </div>
  );
};

export default Page;

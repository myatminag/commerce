import type { Metadata } from 'next';

import CategoryTable from './components/category-table';

export const metadata: Metadata = {
  title: 'Categories',
};

const Page = () => {
  return (
    <section className="pt-6 lg:px-6">
      <CategoryTable />
    </section>
  );
};

export default Page;

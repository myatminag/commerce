import type { Metadata } from 'next';

import CategoryTable from './components/category-table';
import { SectionWrapper } from '@components/section-wrapper';

export const metadata: Metadata = {
  title: 'Categories',
};

const Page = () => {
  return (
    <SectionWrapper className="lg:pe-5 lg:pl-6">
      <CategoryTable />
    </SectionWrapper>
  );
};

export default Page;

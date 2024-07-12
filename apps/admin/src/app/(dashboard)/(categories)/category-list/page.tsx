import type { Metadata } from 'next';
import { Suspense } from 'react';

import CategoryTable from './components/category-table';
import { SectionWrapper } from '@components/section-wrapper';

export const metadata: Metadata = {
  title: 'Categories',
};

const Page = () => {
  return (
    <SectionWrapper className="lg:pe-6 lg:ps-[265px]">
      <Suspense>
        <CategoryTable />
      </Suspense>
    </SectionWrapper>
  );
};

export default Page;

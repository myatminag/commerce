import type { Metadata } from 'next';
import { Suspense } from 'react';

import BrandTable from './components/brand-table';
import { SectionWrapper } from '@components/section-wrapper';

export const metadata: Metadata = {
  title: 'Brands',
};

const Page = () => {
  return (
    <SectionWrapper className="lg:pe-6 lg:ps-[265px]">
      <Suspense>
        <BrandTable />
      </Suspense>
    </SectionWrapper>
  );
};

export default Page;

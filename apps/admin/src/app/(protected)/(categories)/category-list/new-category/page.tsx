import type { Metadata } from 'next';
import Link from 'next/link';

import CategoryForm from './components/category-form';
import ActionButton from './components/action-button';
import { SectionWrapper } from '@components/section-wrapper';
import { BackArrowIcon } from '@components/icons/back-arrow-icon';
import { CreateSubCategory } from './components/add-subcategories';
import { ParcelIcon, GiftIcon } from '@components/icons/category-banner-icon';
import SubCategoryList from './components/sub-category-list';

export const metadata: Metadata = {
  title: 'New Category',
};

const Page = () => {
  return (
    <SectionWrapper className="lg:pt-0">
      <div className="h-60 space-y-3 bg-[linear-gradient(90deg,_#EFFEF9_0%,_#C7F5E6_100%)] lg:pb-6 lg:pe-6 lg:ps-6 lg:pt-24">
        <div className="relative flex items-center justify-between">
          <ParcelIcon className="absolute -left-8 -top-7 z-20" />
          <GiftIcon className="absolute right-0 top-8 z-20" />
          <Link
            href="/category-list"
            className="flex items-center gap-x-2 text-sm text-black"
          >
            <BackArrowIcon />
            Back
          </Link>
          <ActionButton />
        </div>
        <h2 className="text-lg font-bold text-neutral-950">Electronics</h2>
      </div>
      <div className="relative -top-9 z-30 grid grid-cols-3 gap-6 lg:pe-5 lg:ps-6">
        <div className="shadow-base col-span-2 rounded-md bg-white p-6">
          <p className="text-base font-semibold uppercase text-neutral-700">
            Category Info
          </p>
          <CategoryForm />
        </div>
        <div className="shadow-base col-span-1 rounded-md bg-white p-6">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold uppercase text-neutral-700">
              Sub Categories
            </p>
            <CreateSubCategory hasSubCategory />
          </div>
          <SubCategoryList />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Page;

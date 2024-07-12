import type { Metadata } from 'next';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@repo/ui/components/breadcrumb';

import NewCategoryForm from './components/new-category-form';

export const metadata: Metadata = {
  title: 'New Category',
};

const Page = () => {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-4 p-6 lg:flex">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-base hover:text-neutral-800">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-base text-neutral-800">
              New Category
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <NewCategoryForm />
    </div>
  );
};

export default Page;

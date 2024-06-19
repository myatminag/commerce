import Link from 'next/link';

import { SearchInput } from '@repo/ui/components/inputs/search-input';

import { PopularIcon } from '@components/icons/popular-icon';
import { FilterIcon } from '@components/icons/filter-icon';
import { CircleIcon } from '@components/icons/circle-icon';

import { useProductList } from '../use-products-list';

const Filter = () => {
  const { searchParams, handleSearchProducts } = useProductList();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <SearchInput
          placeholder="Search products..."
          className="w-full lg:w-64"
          defaultValue={searchParams.get('q')?.toString()}
          onChange={(e) => handleSearchProducts(e.target.value)}
        />
        <button
          type="button"
          className="inline-flex items-center justify-between gap-x-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-base text-neutral-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          <PopularIcon className="size-3.5 flex-shrink-0" />
          View Popular
        </button>
        <button className="inline-flex items-center justify-between gap-x-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-base text-neutral-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          <FilterIcon className="size-4 fill-white/60" />
          Status
        </button>
      </div>
      <Link
        href="/new-product"
        className="bg-primary flex items-center gap-x-2 rounded-sm px-4 py-2 text-base font-light text-neutral-100"
      >
        <CircleIcon className="size-4" />
        Add Product
      </Link>
    </div>
  );
};

export default Filter;

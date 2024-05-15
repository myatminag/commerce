import Link from 'next/link';

import { SearchInput } from '@repo/ui/components/inputs/search-input';
import { CircleIcon } from '@components/icons/circle-icon';

const Filter = () => {
  return (
    <div className="flex items-center justify-between">
      <SearchInput placeholder="Search brands..." className="w-full lg:w-64" />
      <Link
        href="/new-brand"
        className="bg-primary-100 flex items-center gap-x-2 rounded-sm px-4 py-2 text-base font-light text-neutral-100"
      >
        <CircleIcon className="size-4" />
        Add Brand
      </Link>
    </div>
  );
};

export default Filter;

import Link from 'next/link';

import { PlusIcon } from '@components/icons/plus-icon';
import { SearchInput } from '@repo/ui/components/inputs/search-input';
import CardIcon from '@components/icons/card-icon';

const Filter = () => {
  return (
    <div className="ms-auto flex items-center justify-between gap-x-3">
      <SearchInput
        placeholder="Search categories..."
        className="placeholder:text-primary-950 shadow-search-input w-full rounded-md lg:h-10 lg:w-64"
      />

      <Link
        href="/new-category"
        className="bg-primary flex h-10 items-center gap-x-2 rounded-md px-4 text-base font-light text-neutral-100"
      >
        <PlusIcon className="size-4" />
        Add Category
      </Link>

      <button
        type="button"
        className="s flex size-10 items-center justify-center rounded-md bg-white shadow-sm"
      >
        <CardIcon />
      </button>
    </div>
  );
};

export default Filter;

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SearchInput } from "@commerce/ui/components/inputs/search-input";

import { useBrandList } from "../use-brand-list";
import { PlusIcon } from "@components/icons/plus-icon";
import { CardViewIcon, RowViewIcon } from "@components/icons/view-type-icon";

const Filter = () => {
  const pathname = usePathname();

  const { viewType } = useBrandList();

  return (
    <div className="ms-auto flex items-center justify-between gap-x-3">
      <SearchInput
        placeholder="Search brands..."
        className="placeholder:text-brand-950 shadow-search-input w-full rounded-md lg:h-10 lg:w-64"
      />

      <Link
        href={`${pathname}/new-brand`}
        className="bg-brand-600 flex h-10 w-40 items-center justify-center gap-x-2 rounded-md px-4 text-sm font-medium text-white"
      >
        <PlusIcon className="size-4" />
        Add Brand
      </Link>

      <button
        type="button"
        className="flex size-10 items-center justify-center rounded-md bg-white shadow-sm"
      >
        {viewType === "rows" ? <CardViewIcon /> : <RowViewIcon />}
      </button>
    </div>
  );
};

export default Filter;

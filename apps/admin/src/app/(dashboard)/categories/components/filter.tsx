import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { SearchInput } from "@workspace/ui/components/inputs/search-input";

import { useCategoryList } from "../use-category-list";
import { PlusIcon } from "@components/icons/plus-icon";
import { CardViewIcon, RowViewIcon } from "@components/icons/view-type-icon";

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { viewType, createQueryString } = useCategoryList();

  return (
    <div className="ms-auto flex items-center justify-between gap-x-3">
      <SearchInput
        placeholder="Search categories..."
        className="placeholder:text-brand-950 shadow-search-input w-full rounded-md lg:h-10 lg:w-64"
      />

      <Link
        href={`${pathname}/new-category`}
        className="bg-brand-600 flex h-10 w-40 items-center justify-center gap-x-2 rounded-md px-4 text-sm font-medium text-white"
      >
        <PlusIcon className="size-4" />
        Add Category
      </Link>

      <button
        type="button"
        onClick={() =>
          router.push(
            `${pathname}?${createQueryString(viewType === "rows" ? "cards" : "rows")}`,
          )
        }
        className="flex size-10 items-center justify-center rounded-md bg-white shadow-sm"
      >
        {viewType === "rows" ? <CardViewIcon /> : <RowViewIcon />}
      </button>
    </div>
  );
};

export default Filter;

import { SearchInput } from "@workspace/ui/components/inputs/search-input";

const Filter = () => {
  return (
    <div className="ms-auto flex items-start justify-between gap-x-3">
      <SearchInput
        placeholder="Search brand..."
        className="placeholder:text-brand-950 border-border-300 w-full rounded-md lg:h-10 lg:w-64"
      />

      <button className="bg-brand-600 flex h-10 cursor-pointer items-center justify-center gap-x-2 rounded-md border px-4 text-sm font-medium text-white">
        Search
      </button>
    </div>
  );
};

export default Filter;

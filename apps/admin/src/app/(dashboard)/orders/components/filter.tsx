import { SearchInput } from "@workspace/ui/components/inputs/search-input";

const Filter = () => {
  return (
    <div className="flex items-center justify-between">
      <SearchInput placeholder="Search orders..." className="w-full lg:w-64" />
    </div>
  );
};

export default Filter;

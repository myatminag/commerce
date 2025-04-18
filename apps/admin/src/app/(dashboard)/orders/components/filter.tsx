import { SearchInput } from "@workspace/ui/components/search-input";

const Filter = () => {
  return (
    <div className="flex items-center justify-between">
      <SearchInput
        placeholder="Search by order id or name..."
        className="w-full lg:w-64"
      />
    </div>
  );
};

export default Filter;

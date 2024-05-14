import { SearchInput } from '@repo/ui/components/inputs/search-input';

const Filter = () => {
  return (
    <div>
      <SearchInput
        placeholder="Search categories..."
        className="w-full lg:w-64"
      />
    </div>
  );
};

export default Filter;

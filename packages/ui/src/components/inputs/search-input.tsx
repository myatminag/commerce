import { forwardRef, InputHTMLAttributes } from 'react';

import { cn } from '../../libs/utils';
import { SearchIcon } from '../../icons/search-icon';

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, id, ...props }, ref) => {
    return (
      <div className="relative space-y-1">
        <input
          id={id}
          type="search"
          className={cn(
            'placeholder:text-muted-foreground focus-visible:ring-primary-100 flex h-9 w-full rounded-md border border-gray-200 bg-transparent bg-white px-3 py-1 ps-10 text-base text-neutral-800 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center pb-1 ps-3">
          <SearchIcon className="size-4 text-gray-400" />
        </div>
      </div>
    );
  },
);
SearchInput.displayName = 'Input';

export { SearchInput };

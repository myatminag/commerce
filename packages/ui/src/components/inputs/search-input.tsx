import { forwardRef, InputHTMLAttributes } from 'react';

import { cn } from '../../libs/utils';

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, id, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <input
          id={id}
          type="search"
          className={cn(
            'border-secondary-300 placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
SearchInput.displayName = 'Input';

export { SearchInput };

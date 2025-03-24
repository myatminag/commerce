import { forwardRef, InputHTMLAttributes } from "react";

import { cn } from "../../lib/utils";

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
            "focus-visible:ring-brand-600 flex h-9 w-full rounded-md border border-gray-200 bg-transparent bg-white px-3 py-1 ps-10 text-base text-neutral-800 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sm placeholder:font-medium placeholder:text-neutral-950 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center pb-1 ps-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="#01322D"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12.504 12.48l3.246 3.27m-1.5-7.5a6 6 0 11-12 0 6 6 0 0112 0z"
            ></path>
          </svg>
        </div>
      </div>
    );
  },
);
SearchInput.displayName = "Input";

export { SearchInput };

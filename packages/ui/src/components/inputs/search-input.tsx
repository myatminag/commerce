import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

function SearchInput({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div className="relative space-y-1">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-white px-3 py-1 ps-10 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-brand-600",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className,
        )}
        {...props}
      />
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center pb-1 ps-4 text-[#9f9fa9]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            fill="currentColor"
            d="M10.008 15.731a7.632 7.632 0 1 1 0-15.263 7.632 7.632 0 0 1 0 15.263m0-13.083a5.451 5.451 0 1 0 0 10.903 5.451 5.451 0 0 0 0-10.903"
          ></path>
          <path
            fill="currentColor"
            d="M1.286 17.912a1.09 1.09 0 0 1-.78-1.858l.006-.007 4.1-4.099a1.114 1.114 0 1 1 1.547 1.603L2.06 17.595a1.1 1.1 0 0 1-.774.317"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export { SearchInput };

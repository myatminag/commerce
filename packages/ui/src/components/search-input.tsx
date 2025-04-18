import * as React from "react";

import { cn } from "../lib/utils";

import { Input } from "./input";

function SearchInput({
  className,
  placeholder,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div className="relative">
      <Input
        placeholder={placeholder}
        className={cn("pe-9 ps-9", className)}
        {...props}
      />
      <div className="text-placeholder/70 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m11.504 11.48 3.246 3.27m-1.5-7.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export { SearchInput };

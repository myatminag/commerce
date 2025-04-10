"use client";

import { SVGProps } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Button } from "@workspace/ui/components/button";
import { SearchInput } from "@workspace/ui/components/inputs/search-input";

const StatusDot = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="8"
      height="8"
      fill="currentColor"
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
};

const Filter = () => {
  return (
    <div className="ms-auto flex items-start justify-between gap-x-3">
      <SearchInput
        placeholder="Search category..."
        className="border-border-300 w-full rounded-md lg:h-9 lg:w-52"
      />

      <div>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Filter status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="publish">
                <span className="flex items-center gap-2">
                  <StatusDot className="text-brand-600 size-2" />
                  <span className="truncate">Publish</span>
                </span>
              </SelectItem>
              <SelectItem value="draft">
                <span className="flex items-center gap-2">
                  <StatusDot className="text-danger-500 size-2" />
                  <span className="truncate">Draft</span>
                </span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button>Search</Button>

      <Button variant="outline">Clear</Button>
    </div>
  );
};

export default Filter;

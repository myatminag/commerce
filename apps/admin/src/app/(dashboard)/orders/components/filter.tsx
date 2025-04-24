"use client";

import { SVGProps } from "react";
import { RotateCwIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Button } from "@workspace/ui/components/button";
import { SearchInput } from "@workspace/ui/components/search-input";

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
    <div className="flex items-start justify-between gap-x-3">
      <div className="flex items-start gap-x-3">
        <SearchInput placeholder="Search by order id..." />

        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Filter Payment Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="publish">
                <span className="flex items-center gap-2">
                  <StatusDot className="text-brand-600 size-2" />
                  <span className="truncate">Pending</span>
                </span>
              </SelectItem>
              <SelectItem value="draft">
                <span className="flex items-center gap-2">
                  <StatusDot className="text-danger-500 size-2" />
                  <span className="truncate">Completed</span>
                </span>
              </SelectItem>
              <SelectItem value="draft">
                <span className="flex items-center gap-2">
                  <StatusDot className="text-danger-500 size-2" />
                  <span className="truncate">Failed</span>
                </span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Filter Order Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="publish">
                <span className="flex items-center gap-2">
                  <StatusDot className="text-brand-600 size-2" />
                  <span className="truncate">Order Placed</span>
                </span>
              </SelectItem>
              <SelectItem value="publish">
                <span className="flex items-center gap-2">
                  <StatusDot className="text-brand-600 size-2" />
                  <span className="truncate">In Progress</span>
                </span>
              </SelectItem>
              <SelectItem value="publish">
                <span className="flex items-center gap-2">
                  <StatusDot className="text-brand-600 size-2" />
                  <span className="truncate">Delivered</span>
                </span>
              </SelectItem>
              <SelectItem value="publish">
                <span className="flex items-center gap-2">
                  <StatusDot className="text-brand-600 size-2" />
                  <span className="truncate">Refund</span>
                </span>
              </SelectItem>
              <SelectItem value="draft">
                <span className="flex items-center gap-2">
                  <StatusDot className="text-danger-500 size-2" />
                  <span className="truncate">Rejected</span>
                </span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-x-3">
        <Button size="lg">Search</Button>

        <Button size="icon" variant="outline" className="size-10">
          <RotateCwIcon />
        </Button>
      </div>
    </div>
  );
};

export default Filter;

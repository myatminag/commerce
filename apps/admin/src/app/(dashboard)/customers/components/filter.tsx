"use client";

import { SVGProps } from "react";
import { RotateCwIcon } from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import { SearchInput } from "@workspace/ui/components/search-input";

const Filter = () => {
  return (
    <div className="flex items-start justify-between gap-x-3">
      <SearchInput placeholder="Search by id or sku..." />

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

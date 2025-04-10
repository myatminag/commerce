"use client";

import { LoaderCircleIcon } from "lucide-react";

import { Button } from "@workspace/ui/components/button";

export const ActionButton = () => {
  return (
    <div className="flex items-center gap-x-3">
      <Button>
        <LoaderCircleIcon
          className="-ms-1 animate-spin"
          size={16}
          aria-hidden="true"
        />
        Save
      </Button>
    </div>
  );
};

"use client";

import { LoaderCircleIcon } from "lucide-react";

import { Button } from "@workspace/ui/components/button";

const ActionButton = () => {
  return (
    <div className="flex items-center gap-x-3">
      <Button variant="default">
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

export default ActionButton;

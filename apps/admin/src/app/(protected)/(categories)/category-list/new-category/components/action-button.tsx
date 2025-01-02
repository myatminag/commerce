"use client";

import { Button } from "@commerce/ui/components/button";

const ActionButton = () => {
  return (
    <div className="flex items-center gap-x-3">
      <Button variant="outline" className="w-[100px]">
        Discard
      </Button>
      <Button className="w-[100px]">Save</Button>
    </div>
  );
};

export default ActionButton;

"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, LoaderCircleIcon } from "lucide-react";

import { Button } from "@workspace/ui/components/button";

export const ActionButton = () => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-x-3">
      <Button variant="outline" className="w-24" onClick={() => router.back()}>
        <ArrowLeft />
        Back
      </Button>
      <Button variant="default" className="w-24">
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

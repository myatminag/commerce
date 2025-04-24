"use client";

import { useRouter } from "next/navigation";
import { CircleAlertIcon, MoveLeftIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Button } from "@workspace/ui/components/button";

const ActionButton = () => {
  const router = useRouter();

  return (
    <div className="space-y-3">
      <Button
        variant="none"
        onClick={() => router.back()}
        className="text-sm font-light text-neutral-950 has-[>svg]:px-0"
      >
        <svg
          width="19"
          height="12"
          viewBox="0 0 19 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.434315 5.43431C0.121895 5.74673 0.121895 6.25327 0.434315 6.56569L5.52548 11.6569C5.8379 11.9693 6.34443 11.9693 6.65685 11.6569C6.96927 11.3444 6.96927 10.8379 6.65685 10.5255L2.13137 6L6.65685 1.47452C6.96927 1.1621 6.96927 0.655565 6.65685 0.343146C6.34443 0.0307264 5.8379 0.0307264 5.52548 0.343146L0.434315 5.43431ZM19 5.2L1 5.2V6.8L19 6.8V5.2Z"
            fill="black"
          />
        </svg>
        Back
      </Button>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2md font-semibold">#AJ1295DWMG90</h2>
          <p className="text-sm text-neutral-500">
            Order placed on: 17 Aug, 2023, 5:48 am
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <Button size="lg" className="bg-brand-600 rounded-md p-2 text-white">
            Confirm
          </Button>
          <AlertDialog>
            <AlertDialogTrigger
              type="button"
              className="bg-brand-55 border-brand-600 text-brand-600 hover:bg-brand-100/75 h-10 w-24 cursor-pointer rounded-lg border text-sm"
            >
              Reject
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white sm:max-w-md">
              <AlertDialogHeader className="gap-y-3">
                <AlertDialogTitle className="text-md flex items-center gap-x-2">
                  <div className="bg-danger-500/10 flex size-10 items-center justify-center rounded-full">
                    <CircleAlertIcon
                      size={20}
                      className="text-danger-500 opacity-80"
                    />
                  </div>
                  Reject Order
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to reject this order? This action cannot
                  be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="space-y-2">
                <Label className="block">Note</Label>
                <Input placeholder="Enter reject note" />
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel className="h-10">Cancel</AlertDialogCancel>
                <AlertDialogAction className="border-danger-400 hover:bg-danger-400/90 bg-danger-400 h-10 text-white">
                  Reject
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default ActionButton;

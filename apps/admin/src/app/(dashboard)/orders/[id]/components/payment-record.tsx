import Image from "next/image";

import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
} from "@workspace/ui/components/dialog";
import { Button } from "@workspace/ui/components/button";

import { SuccessIcon } from "@/src/components/icons/status-icon";

const PaymentRecord = () => {
  return (
    <div className="w-full rounded-md bg-white shadow-sm">
      <p className="text-heading border-b border-gray-200 p-4 font-medium text-neutral-700">
        Payment Record
      </p>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-800">Platform:</p>
          <div className="flex items-center gap-x-1">
            <Image
              src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
              alt="payment-platform"
              width={100}
              height={100}
              className="h-7 w-14 rounded"
            />
            <p className="text-base font-medium text-neutral-800">AYAPay</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-800">Date:</p>
          <p className="text-base font-medium text-neutral-800">
            1st Mar 2023 at 06:00 PM
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-800">Status:</p>
          <span className="inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-2 py-1 text-base font-medium text-[#1EB564]">
            <SuccessIcon className="size-4" />
            Success
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-base text-neutral-400">Screenshots</p>
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-8">
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Temporary disabling the rule because of no actual API binding */}
            {[...Array(3)].map((_, i) => (
              <Image
                // eslint-disable-next-line react/no-array-index-key -- Temporary disabling the rule because of no actual API binding
                key={i}
                src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                alt="payment-screenshots"
                width={100}
                height={100}
                className="size-20 rounded-md"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-x-2">
          <Dialog>
            <DialogTrigger>
              <Button
                className="text-brand-600-100 rounded-md bg-[#FAE9EA] px-4 text-sm"
                size="sm"
              >
                Reject
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
              <DialogHeader className="text-heading border-b font-medium text-neutral-800">
                Reject Payment
              </DialogHeader>
              <p className="px-6 text-center text-base text-neutral-800">
                Are you sure you want to reject this payment? This action can
                not be undone.
              </p>
              <div className="flex items-center gap-x-3 px-4 pb-4">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="text-brand-600-100 bg-brand-600-200 w-full"
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button className="bg-brand-600-100 w-full">Reject</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button
            className="bg-brand-600-100 rounded-md px-4 text-sm text-white"
            size="sm"
          >
            Approve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentRecord;

"use client";

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";

import { status } from "@/src/components/status";

const PaymentRecord = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Card>
      <CardHeader className="gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          Payment Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-x-5">
              <p className="w-40 max-w-40 text-sm text-neutral-950">
                Transaction ID
              </p>
              <p className="text-sm font-medium text-neutral-950">
                243095448102
              </p>
            </div>
            <div className="flex items-center gap-x-5">
              <p className="w-40 max-w-40 text-sm">Payment Method</p>
              <p className="text-sm font-medium text-neutral-950">AYA Pay</p>
            </div>
            <div className="flex items-center gap-x-5">
              <p className="w-40 max-w-40 text-sm">Payment Status</p>
              <div className="text-sm font-medium text-neutral-950">
                {status("pending")}
              </div>
            </div>
            <div className="flex items-center gap-x-5">
              <p className="w-40 max-w-40 text-sm text-neutral-950">
                Payment Date
              </p>
              <p className="text-sm font-medium text-neutral-950">
                2023-10-01 11:43:10 AM
              </p>
            </div>
          </div>
          <Image
            src="/temp/receipt.jpeg"
            alt="Payment Receipt"
            width={150}
            height={150}
            onClick={() => setOpenModal(true)}
            className="h-44 cursor-pointer rounded-md border border-neutral-100 object-cover object-top"
          />
          {openModal &&
            createPortal(
              <dialog
                open={openModal}
                aria-modal="true"
                className={cn(
                  "fixed inset-0 z-50 h-screen w-screen transition-colors duration-75",
                  openModal ? "visible bg-[#000000EB]" : "invisible",
                )}
              >
                <div
                  className="absolute right-10 top-10 size-7 cursor-pointer disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => setOpenModal(false)}
                >
                  <XIcon size="24" className="flex-shrink-0 text-white" />
                </div>
                <div className="flex min-h-screen flex-grow items-center justify-center">
                  <Image
                    src="/temp/receipt.jpeg"
                    alt="Payment Receipt"
                    width={500}
                    height={500}
                    className="w-64 rounded-md border border-neutral-100"
                  />
                </div>
              </dialog>,
              document.body,
            )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentRecord;

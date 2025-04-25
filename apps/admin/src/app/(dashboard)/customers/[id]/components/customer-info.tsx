"use client";

import Image from "next/image";
import { IdCardIcon, PhoneIcon, MailIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

const CustomerInfo = () => {
  return (
    <Card>
      <CardHeader className="gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          <p className="text-heading font-medium">Customer Profile</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
          alt="Customer Avatar"
          width={150}
          height={150}
          className="mx-auto mb-5 size-20 rounded-full"
        />
        <p className="text-2md mb-5 text-center font-semibold text-neutral-950">
          Peter Miranda
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-x-3">
            <IdCardIcon size="20" />
            <p className="text-sm font-medium text-neutral-950">
              Customer Id <br />
              <span className="text-placeholder font-normal">AYD6613FW12B</span>
            </p>
          </div>
          <div className="flex items-start gap-x-3">
            <PhoneIcon size="20" />
            <p className="text-sm font-medium text-neutral-950">
              Phone Number <br />
              <span className="text-placeholder font-normal">09123456789</span>
            </p>
          </div>
          <div className="flex items-start gap-x-3">
            <MailIcon size="20" />
            <p className="text-sm font-medium text-neutral-950">
              Email Address <br />
              <span className="text-placeholder font-normal">
                peter.miranda@gmail.com
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerInfo;

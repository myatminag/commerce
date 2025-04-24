"use client";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

const DeliverySerivce = () => {
  return (
    <Card>
      <CardHeader className="gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          Delivery Service
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-start gap-x-4">
        <Image
          src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
          alt="Image Description"
          width={150}
          height={150}
          className="size-14 flex-shrink-0 rounded-sm"
        />
        <div className="space-y-0.5">
          <p className="text-sm font-semibold text-neutral-950">Ninja Van</p>
          <p className="text-sm text-neutral-950">09123456789</p>
          <p className="text-sm text-neutral-950">
            Est Delivery Day (2 - 4 Days)
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliverySerivce;

"use client";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@workspace/ui/components/timeline";
import { CheckIcon } from "lucide-react";

const items = [
  {
    id: 1,
    date: "Mar 15, 2024",
    title: "Order Placed",
    description: "The order has been placed and is awaiting confirmation.",
  },
  {
    id: 2,
    date: "Mar 16, 2024",
    title: "Confirmed",
    description: "The order has been confirmed and is being prepared.",
  },
  {
    id: 3,
    date: "Mar 18, 2024",
    title: "In Progress",
    description:
      "The order is in progress — items are being produced or assembled.",
  },
  {
    id: 4,
    date: "Mar 21, 2024",
    title: "Delivered",
    description: "The order has been completed and delivered to the customer.",
  },
];

const OrderTracking = () => {
  return (
    <Card>
      <CardHeader className="gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          Order Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-start gap-x-4">
        <Timeline defaultValue={3}>
          {items.map((item) => (
            <TimelineItem key={item.id} step={item.id}>
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineIndicator className="group-data-completed/timeline-item:bg-brand-600 group-data-completed/timeline-item:text-white group-data-completed/timeline-item:border-brand-600 flex size-5 items-center justify-center group-data-[orientation=vertical]/timeline:-left-6">
                  <CheckIcon
                    className="group-not-data-completed/timeline-item:hidden"
                    size={12}
                  />
                </TimelineIndicator>
              </TimelineHeader>
              <TimelineContent>{item.description}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
};

export default OrderTracking;

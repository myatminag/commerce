import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export const NewArrival = () => {
  return (
    <Card className="border-border-300 col-span-1 py-6">
      <CardHeader className="flex items-center gap-2 space-y-0 px-4 sm:flex-row">
        <CardTitle>New Arrival</CardTitle>
      </CardHeader>
      <CardContent className="space-y-7 px-4">
        {[...Array(5)].map((n, i) => (
          <div key={i} className="flex items-center gap-x-3">
            <Image
              width={100}
              height={100}
              className="size-12 flex-shrink-0 rounded-sm"
              src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
              alt="Image Description"
            />
            <div>
              <p className="text-sm font-semibold text-neutral-950">
                Louis Vutton Winter Hat
              </p>
              <p className="text-brand-700 text-sm">36000 MMK</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

import { Fragment } from "react";

import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/inputs/label";

const DiscountInfo = () => {
  return (
    <Fragment>
      <p className="border-b p-6 text-base font-semibold uppercase text-neutral-700">
        Discount Info
      </p>
      <div className="flex flex-col gap-y-6 p-6">
        <div className="col-span-2 space-y-2">
          <Label className="block">Discount Type</Label>
          <Input placeholder="Enter discount type" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Discount Period</Label>
          <Input placeholder="Enter discount period" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Discount Amount</Label>
          <Input placeholder="Enter discount amount" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Discount Price</Label>
          <Input placeholder="Enter discount price" />
        </div>
      </div>
    </Fragment>
  );
};

export default DiscountInfo;

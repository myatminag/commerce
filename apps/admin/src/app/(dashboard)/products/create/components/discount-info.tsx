import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card";

const DiscountInfo = () => {
  return (
    <Card className="col-span-1 row-span-1 max-h-fit">
      <CardHeader className="gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          Discount Info
        </CardTitle>
      </CardHeader>
      <div className="flex flex-col gap-y-6 px-6">
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
    </Card>
  );
};

export default DiscountInfo;

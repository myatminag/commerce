import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";

const PaymentSummary = () => {
  return (
    <Card>
      <CardHeader className="gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          Payment Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-5 p-0">
        <div className="flex items-center justify-between px-6">
          <p className="text-sm text-neutral-950">Est Delivery Time:</p>
          <p className="text-sm font-medium text-neutral-950">(1 - 2) Days</p>
        </div>
        <div className="flex items-center justify-between px-6">
          <p className="text-sm text-neutral-950">Subtotal:</p>
          <p className="text-sm font-medium text-neutral-950">345,000 Ks</p>
        </div>
        <div className="flex items-center justify-between px-6">
          <p className="text-sm text-neutral-950">Delivery Fee:</p>
          <p className="text-sm font-medium text-neutral-950">3,000 Ks</p>
        </div>
        <div className="flex items-center justify-between px-6">
          <p className="text-sm text-neutral-950">Discount:</p>
          <p className="text-sm font-medium text-neutral-950">-</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between px-6">
          <p className="text-sm text-neutral-950">Total Amount:</p>
          <p className="text-md font-medium text-neutral-950">380,000 Ks</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentSummary;

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { Switch } from "@workspace/ui/components/switch";
import { Input } from "@workspace/ui/components/input";
import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card";

const orders = [
  {
    id: "250123101-5",
    name: "Peter Marina",
    totalQty: 4,
    totalPrice: 540000,
    paymentStatus: "pending",
    orderDate: "21 Feb 2024, 08:00 pm",
  },
  {
    id: "250123101-5",
    name: "Peter Marina",
    totalQty: 4,
    totalPrice: 540000,
    paymentStatus: "pending",
    orderDate: "21 Feb 2024, 08:00 pm",
  },
  {
    id: "250123101-5",
    name: "Peter Marina",
    totalQty: 4,
    totalPrice: 540000,
    paymentStatus: "pending",
    orderDate: "21 Feb 2024, 08:00 pm",
  },
  {
    id: "250123101-5",
    name: "Peter Marina",
    totalQty: 4,
    totalPrice: 540000,
    paymentStatus: "pending",
    orderDate: "21 Feb 2024, 08:00 pm",
  },
  {
    id: "250123101-5",
    name: "Peter Marina",
    totalQty: 4,
    totalPrice: 540000,
    paymentStatus: "pending",
    orderDate: "21 Feb 2024, 08:00 pm",
  },
];

const ProductVariants = () => {
  return (
    <Card className="col-span-3 row-span-2 max-h-fit gap-y-0">
      <CardHeader className="gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          Product Variants
        </CardTitle>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow className="h-12 bg-gray-100">
            <TableHead className="px-6 font-normal text-[#8B909A]">
              Variant
            </TableHead>
            <TableHead className="font-normal text-[#8B909A]">SKU</TableHead>
            <TableHead className="font-normal text-[#8B909A]">
              Variant Price
            </TableHead>
            <TableHead className="font-normal text-[#8B909A]">
              Cost of goods
            </TableHead>
            <TableHead className="font-normal text-[#8B909A]">
              Quantity
            </TableHead>
            <TableHead className="font-normal text-[#8B909A]">
              Shipping Weight
            </TableHead>
            <TableHead className="font-normal text-[#8B909A]">
              Visibility
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, i) => (
            <TableRow key={i} className="h-16">
              <TableCell className="px-6">
                <div className="w-36">
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger className="block w-full">
                        <p className="truncate text-sm">
                          8-Core CPU/8-Core GPU/8GB unified memory
                        </p>
                      </TooltipTrigger>
                      <TooltipContent className="p-4 text-xs">
                        <p className="w-56">
                          8-Core CPU/8-Core GPU/8GB unified memory | Silver |
                          256GB
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableCell>
              <TableCell>
                <Input className="h-8" />
              </TableCell>
              <TableCell>
                <Input className="h-8" />
              </TableCell>
              <TableCell>
                <Input className="h-8" />
              </TableCell>
              <TableCell>
                <Input className="h-8 w-28" />
              </TableCell>
              <TableCell>
                <Input className="h-8 w-28" />
              </TableCell>
              <TableCell className="px-6">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild className="block w-full">
                      <div>
                        <Switch id="is-available" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="p-4 text-xs">
                      <p className="w-24">Hide this variant from your store</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ProductVariants;

import { EllipsisIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@workspace/ui/components/dropdown-menu";

import { paymentStatus } from "@/src/components/payment-status";

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

export const LatestOrders = () => {
  return (
    <Card className="border-border-300 col-span-4 flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Latest Orders</CardTitle>
      </CardHeader>
      <CardContent className="scrollbar-none flex-1 px-4 pb-0">
        <Table>
          <TableHeader>
            <TableRow className="h-12 bg-gray-100">
              <TableHead className="font-normal text-[#8B909A]">
                Order Id
              </TableHead>
              <TableHead className="font-normal text-[#8B909A]">
                Customer Name
              </TableHead>
              <TableHead className="font-normal text-[#8B909A]">
                Total Qty
              </TableHead>
              <TableHead className="font-normal text-[#8B909A]">
                Total Price
              </TableHead>
              <TableHead className="font-normal text-[#8B909A]">
                Payment Status
              </TableHead>
              <TableHead className="font-normal text-[#8B909A]">
                Order Date
              </TableHead>
              <TableHead className="font-normal text-[#8B909A]">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, i) => (
              <TableRow key={i} className="h-12">
                <TableCell className="text-[#0F60FF]">{order.id}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.totalQty} Qty</TableCell>
                <TableCell>{order.totalPrice.toLocaleString()} MMK</TableCell>
                <TableCell>{paymentStatus(order.paymentStatus)}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex justify-start">
                        <Button
                          size="icon"
                          variant="none"
                          className="cursor-pointer shadow-none"
                          aria-label="Edit item"
                        >
                          <EllipsisIcon size={16} aria-hidden="true" />
                        </Button>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuGroup>
                        <DropdownMenuItem className="hover:bg-background cursor-pointer">
                          <span>Detail</span>
                          <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-background cursor-pointer">
                          <span>Approve</span>
                          <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-danger-500 focus:text-danger-500 hover:bg-background cursor-pointer">
                        <span>Cancel</span>
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

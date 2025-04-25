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
  TableRow,
} from "@workspace/ui/components/table";
import { Badge } from "@workspace/ui/components/badge";

import { status } from "@/src/components/status";

const OrderHistory = () => {
  return (
    <Card>
      <CardHeader className="gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          <p className="text-heading font-medium">Order History</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 px-0">
        <Table>
          <TableBody>
            {[...Array(8)].map((_, i) => (
              <TableRow key={i} className="h-12">
                <TableCell className="space-y-2 py-4 align-bottom font-medium text-neutral-950">
                  <Badge variant="secondary" className="px-2">
                    AJ1295DWMG90
                  </Badge>
                  <p className="mb-1 text-left font-normal text-[#87928F]">
                    Total Amount
                  </p>
                  {Number(4000000).toLocaleString()} Ks
                </TableCell>
                <TableCell className="py-4 align-bottom font-medium text-neutral-950">
                  <p className="mb-1 text-left font-normal text-[#87928F]">
                    Total Items
                  </p>
                  12 items
                </TableCell>
                <TableCell className="py-4 align-bottom font-medium text-neutral-950">
                  <p className="mb-1 text-left font-normal text-[#87928F]">
                    Order Date
                  </p>
                  21 Feb 2024, 8:43 pm
                </TableCell>
                <TableCell className="py-4 align-bottom font-medium text-neutral-950">
                  <p className="mb-1 text-left font-normal text-[#87928F]">
                    Status
                  </p>
                  <div className="flex items-center gap-x-2">
                    {status("paid")} l {status("delivered")}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrderHistory;

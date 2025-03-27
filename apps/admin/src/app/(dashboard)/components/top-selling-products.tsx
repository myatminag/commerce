import Image from "next/image";

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

const products = [
  {
    name: "Louis Vutton Winter Hat",
    url: "https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    price: "36000 MMK",
    sold: 13,
    sales: "468000 MMK",
  },
  {
    name: "Louis Vutton Winter Hat",
    url: "https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    price: "36000 MMK",
    sold: 13,
    sales: "468000 MMK",
  },
  {
    name: "Louis Vutton Winter Hat",
    url: "https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    price: "36000 MMK",
    sold: 13,
    sales: "468000 MMK",
  },
  {
    name: "Louis Vutton Winter Hat",
    url: "https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    price: "36000 MMK",
    sold: 13,
    sales: "468000 MMK",
  },
  {
    name: "Louis Vutton Winter Hat",
    url: "https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    price: "36000 MMK",
    sold: 13,
    sales: "468000 MMK",
  },
];

export const TopSellingProducts = () => {
  return (
    <Card className="border-card-100 col-span-3 py-6">
      <CardHeader className="flex items-center gap-2 space-y-0 px-4 sm:flex-row">
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Sold</TableHead>
              <TableHead className="text-right">Sales</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, i) => (
              <TableRow key={i}>
                <TableCell className="flex items-center gap-x-2 font-medium">
                  <Image
                    width={100}
                    height={100}
                    className="size-12 flex-shrink-0 rounded-sm"
                    src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                  {product.name}
                </TableCell>
                <TableCell className="text-right">{product.price}</TableCell>
                <TableCell className="text-right">{product.sold} Qty</TableCell>
                <TableCell className="text-right">{product.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

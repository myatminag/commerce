"use client";

import Image from "next/image";

import {
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@workspace/ui/components/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

const ProductList = () => {
  return (
    <Card className="gap-y-3 pb-3">
      <CardHeader className="gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          Product List
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableBody>
            {[...Array(4)].map((_, i) => (
              <TableRow key={i} className="h-12">
                <TableCell className="p-6">
                  <div className="flex items-center gap-x-4">
                    <Image
                      className="size-14 flex-shrink-0 rounded-sm"
                      src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                      alt="Image Description"
                      width={150}
                      height={150}
                    />
                    <div className="flex-1 space-y-0.5">
                      <p className="line-clamp-2 block text-base font-medium text-neutral-950">
                        Nike Air Max INTRLK
                      </p>
                      <p className="text-placeholder block text-sm font-medium">
                        SKU: 41329053201
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {Number(4000000).toLocaleString()} Ks
                </TableCell>
                <TableCell className="w-20 text-center">x1</TableCell>
                <TableCell className="text-right">
                  {Number(4000000).toLocaleString()} Ks
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ProductList;

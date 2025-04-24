"use client";

import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { DataTable } from "@workspace/ui/components/data-table";

import Filter from "./filter";

import { orders } from "./data";
import columns from "./column";

const OrderTable = () => {
  return (
    <div className="space-y-6">
      <Filter />

      <Card className="border-border-300 flex flex-col">
        <CardHeader className="flex items-center justify-between pb-0">
          <CardTitle className="text-2md">Order (32)</CardTitle>
        </CardHeader>
        <DataTable columns={columns} data={orders} />
      </Card>
    </div>
  );
};

export default OrderTable;

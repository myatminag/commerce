"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { DataTable } from "@workspace/ui/components/data-table";

import Filter from "./filter";
import columns from "./columns";
import { customers } from "./data";

const CustomerTable = () => {
  return (
    <div className="space-y-6">
      <Filter />

      <Card className="border-border-300 col-span-4 flex flex-col">
        <CardHeader className="flex items-center justify-between pb-0">
          <CardTitle className="text-2md">Customers (32)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <DataTable data={customers} columns={columns} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerTable;

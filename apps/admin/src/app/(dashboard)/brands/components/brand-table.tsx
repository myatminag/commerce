"use client";

import { DataTable } from "@workspace/ui/components/data-table";
import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card";

import Filter from "./filter";
import { columns } from "./columns";
import { categories } from "../../categories/components/data";

const BrandTable = () => {
  return (
    <div className="space-y-6">
      <Filter />

      <Card className="border-border-300 flex flex-col">
        <CardHeader className="flex items-center justify-between pb-0">
          <CardTitle className="text-2md">Brands (32)</CardTitle>
        </CardHeader>
        <DataTable data={categories} columns={columns} />
      </Card>
    </div>
  );
};

export default BrandTable;

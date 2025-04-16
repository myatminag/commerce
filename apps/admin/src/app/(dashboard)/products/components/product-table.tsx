"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { DataTable } from "@workspace/ui/components/table/data-table";

import column from "./columns";
import Filter from "./filter";
import { products } from "./data";

const CategoryTable = () => {
  return (
    <>
      <div className="flex items-center">
        <h2 className="text-brand-900 text-lg font-bold">
          Products <span className="text-md font-normal">(32)</span>
        </h2>
        <Filter />
      </div>

      <Card className="border-border-300 col-span-4 flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Latest Orders</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <DataTable data={products} columns={column} />
        </CardContent>
      </Card>
    </>
  );
};

export default CategoryTable;

"use client";

import { DataTable } from "@workspace/ui/components/data-table";
import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card";

import column from "./columns";
import Filter from "./filter";
import { categories } from "./data";

const CategoryTable = () => {
  return (
    <div className="space-y-6">
      <Filter />

      <Card className="border-border-300 flex flex-col">
        <CardHeader className="flex items-center justify-between pb-0">
          <CardTitle className="text-2md">Categories (32)</CardTitle>
        </CardHeader>
        <DataTable data={categories} columns={column} />
      </Card>
    </div>
  );
};

export default CategoryTable;

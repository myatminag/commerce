"use client";

import { DataTable } from "@workspace/ui/components/table/data-table";

import column from "./columns";
import Filter from "./filter";
import { categories } from "./data";

const CategoryTable = () => {
  return (
    <>
      <div className="flex items-center">
        <h2 className="text-brand-900 text-lg font-bold">
          Categories <span className="text-md font-normal">(32)</span>
        </h2>
        <Filter />
      </div>

      <DataTable data={categories} columns={column} />
    </>
  );
};

export default CategoryTable;

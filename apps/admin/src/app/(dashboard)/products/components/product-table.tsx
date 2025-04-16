"use client";

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

      <DataTable data={products} columns={column} />
    </>
  );
};

export default CategoryTable;

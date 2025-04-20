"use client";

import { DataTable } from "@workspace/ui/components/data-table";

import Filter from "./filter";

// import { orders } from './data';
// import columns from './column';

const OrderTable = () => {
  return (
    <div className="space-y-6">
      <Filter />

      {/* <DataTable columns={columns} data={orders} /> */}
    </div>
  );
};

export default OrderTable;

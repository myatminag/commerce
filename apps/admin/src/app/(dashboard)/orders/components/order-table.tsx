"use client";

// import { DataTable } from '@workspace/ui/components/table/data-table';

import Filter from "./filter";

// import { orders } from './data';
// import columns from './column';

const OrderTable = () => {
  return (
    <>
      <h2 className="text-heading font-semibold">Order Lists (32)</h2>

      <Filter />

      {/* <DataTable columns={columns} data={orders} /> */}
    </>
  );
};

export default OrderTable;

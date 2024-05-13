'use client';

import { DataTable } from '@repo/ui/components/table/data-table';

import { products } from '@data/product';
import column from './column';
import Filter from './filter';

const ProductTable = () => {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-heading font-semibold">Product List (1,311)</h2>
      </div>

      <Filter />

      <DataTable data={products} columns={column} />
    </>
  );
};

export default ProductTable;

'use client';

import { DataTable } from '@repo/ui/components/table/data-table';

import { categories } from './data';
import column from './columns';
import Filter from './filter';

const CategoryTable = () => {
  return (
    <>
      <h2 className="text-heading font-semibold">Category List (32)</h2>

      <Filter />

      <DataTable data={categories} columns={column} />
    </>
  );
};

export default CategoryTable;

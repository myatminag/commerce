'use client';

import { DataTable } from '@repo/ui/components/table/data-table';

import { categories } from './data';
import column from './columns';
import Filter from './filter';

const CategoryTable = () => {
  return (
    <>
      <div className="flex items-center">
        <h2 className="text-primary-900 text-lg font-semibold">
          Category <span className="font-normal">(32)</span>
        </h2>
        <Filter />
      </div>

      <DataTable data={categories} columns={column} />
    </>
  );
};

export default CategoryTable;

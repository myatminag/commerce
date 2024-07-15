'use client';

import { DataTable } from '@repo/ui/components/table/data-table';

import { categories } from './data';
import column from './columns';
import Filter from './filter';

const CategoryTable = () => {
  return (
    <>
      <div className="flex items-center">
        <h2 className="text-brand-900 text-lg font-bold">
          Category <span className="text-md font-normal">(32)</span>
        </h2>
        <Filter />
      </div>

      <DataTable data={categories} columns={column} pathname="/category-list" />
    </>
  );
};

export default CategoryTable;

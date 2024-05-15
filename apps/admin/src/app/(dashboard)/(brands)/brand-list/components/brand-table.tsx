'use client';

import { DataTable } from '@repo/ui/components/table/data-table';

import Filter from './filter';
import { columns } from './columns';
import { categories } from '../../../(categories)/category-list/components/data';

const BrandTable = () => {
  return (
    <>
      <h2 className="text-heading font-semibold">Brand List (32)</h2>

      <Filter />

      <DataTable data={categories} columns={columns} />
    </>
  );
};

export default BrandTable;

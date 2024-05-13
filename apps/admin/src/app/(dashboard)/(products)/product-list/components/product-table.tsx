'use client';

import { Suspense } from 'react';

import { DataTable } from '@repo/ui/components/table/data-table';

import column from './column';
import Filter from './filter';
import { useProducts } from '../use-products';

const ProductTable = () => {
  const { isLoading, isError, data } = useProducts();

  if (isError) return null;

  return (
    <>
      <div className="space-y-2">
        <h2 className="text-heading font-semibold">Product List (1,311)</h2>
      </div>

      <Filter />

      {isLoading ? (
        <p>Loading...</p>
      ) : data && data?.items.length > 0 ? (
        <DataTable data={data?.items} columns={column} />
      ) : (
        <p>No Results found</p>
      )}
    </>
  );
};

export default ProductTable;

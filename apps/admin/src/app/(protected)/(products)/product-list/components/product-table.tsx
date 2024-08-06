'use client';

import { DataTable } from '@repo/ui/components/table/data-table';

import { useProductList } from '../use-products-list';

import columns from './columns';
import Filter from './filter';

const ProductTable = () => {
  const { isLoading, isError, data } = useProductList();

  if (isError) return null;

  return (
    <>
      <h2 className="text-heading font-semibold">
        Product List ({data?.items.length})
      </h2>

      <Filter />

      {isLoading ? (
        <p>Loading...</p>
      ) : data && data?.items.length > 0 ? (
        <DataTable data={data?.items} columns={columns} />
      ) : (
        <p>No Results found</p>
      )}
    </>
  );
};

export default ProductTable;

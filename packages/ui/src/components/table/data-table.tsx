import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import Pagination from './pagination';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: any[];
  viewType: 'rows' | 'cards';
}

export const DataTable = <TData, TValue>({
  columns,
  data,
  viewType,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {viewType === 'rows' && (
        <div className="space-y-4">
          <Table className="border-separate border-spacing-y-3">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="bg-white">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <Pagination table={table} />
        </div>
      )}

      {viewType === 'cards' && table && (
        <div className="mt-4 lg:grid lg:grid-cols-4 lg:gap-4">
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <div
                key={row.id}
                className="relative aspect-video h-56 w-full max-w-xs rounded-lg border bg-white shadow-sm"
              >
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="category-banner"
                  className="h-full w-full rounded-lg object-cover"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#1A332E10] via-[#1A332E75] to-[#04251F] opacity-[34%]" />
                <div className="absolute bottom-2 left-5 mb-2">
                  <p className="text-md truncate font-bold text-white">
                    {row.getValue('name')}
                  </p>
                  <p className="truncate text-xs font-normal text-white">
                    Stove
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full text-center text-gray-500">No results.</div>
          )}
        </div>
      )}
    </>
  );
};

import { Table } from "@tanstack/react-table";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { Button } from "../button";

interface PaginationProps<TData> {
  table: Table<TData>;
}

const Pagination = <TData,>({ table }: PaginationProps<TData>) => {
  return (
    <div className="flex h-14 items-center justify-between bg-white px-4">
      <div className="flex-1 text-sm text-neutral-950">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm text-neutral-950">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px] border border-neutral-300 bg-[#DFFBF6] focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top" className="hover: bg-white">
              {[10, 20, 30].map((pageSize) => (
                <SelectItem
                  key={pageSize}
                  value={String(pageSize)}
                  className="hover:bg-background"
                >
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm text-neutral-950">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 border-neutral-300 bg-[#DFFBF6] p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4 text-neutral-950" />
          </Button>
          <Button
            variant="ghost"
            className="h-8 w-8 border-neutral-300 bg-[#DFFBF6] p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4 text-neutral-950" />
          </Button>
          <Button
            variant="ghost"
            className="h-8 w-8 border-neutral-300 bg-[#DFFBF6] p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4 text-neutral-950" />
          </Button>
          <Button
            variant="ghost"
            className="hidden h-8 w-8 border-neutral-300 bg-[#DFFBF6] p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="text-brand-600 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

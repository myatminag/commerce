import * as z from 'zod';
import Image from 'next/image';
import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@repo/ui/components/inputs/checkbox';
import { ColumnHeader } from '@repo/ui/components/table/column-header';

const categorySchema = z.object({});

type Category = z.infer<typeof categorySchema>;

export const columns: ColumnDef<Category>[] = [
  {
    id: 'select',
    header: ({ table }) => {
      return (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      );
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <ColumnHeader
          column={column}
          title="Category name"
          className="text-table-header text-base font-medium"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[500px] items-center gap-x-3">
          <Image
            width={100}
            height={100}
            className="size-10 flex-shrink-0 rounded-sm"
            src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
            alt="Image Description"
          />
          <p className="text-primary-950 truncate text-base font-medium">
            {row.getValue('name')}
          </p>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'brand',
    header: ({ column }) => {
      return (
        <ColumnHeader
          column={column}
          title="Sub categories"
          className="text-table-header text-base font-medium"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <p className="text-primary-950 max-w-[200px] truncate text-base font-medium">
            Stove
          </p>
          <p className="text-primary-700 flex size-7 items-center justify-center rounded-full bg-[#C8E9E3] text-sm">
            +8
          </p>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'product',
    header: ({ column }) => {
      return (
        <ColumnHeader
          column={column}
          title="Products"
          className="text-table-header text-base font-medium"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <p className="text-primary-950 max-w-[100px] truncate text-base font-medium">
            15 Products
          </p>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => {
      return (
        <ColumnHeader
          column={column}
          title="Description"
          className="text-table-header text-base font-medium"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <p className="text-primary-950 max-w-[500px] truncate text-base font-medium">
            Clothing for men, women, and children
          </p>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'created-at',
    header: ({ column }) => {
      return (
        <ColumnHeader
          column={column}
          title="Last Modified On"
          className="text-table-header text-base font-medium"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <span className="text-primary-950 max-w-[200px] truncate text-base font-medium">
          21 Feb 2024, 8:43 pm
        </span>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];

export default columns;

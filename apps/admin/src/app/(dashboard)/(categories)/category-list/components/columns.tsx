import * as z from 'zod';
import Image from 'next/image';
import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@repo/ui/components/inputs/checkbox';
import { ColumnHeader } from '@repo/ui/components/table/column-header';

import Actions from './actions';

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
          title="Name"
          className="text-base text-neutral-500"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[500px] items-center gap-x-3">
          <Image
            width={100}
            height={100}
            className="size-[44px] flex-shrink-0 rounded-sm"
            src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
            alt="Image Description"
          />
          <div className="">
            <span className="truncate text-base text-neutral-800">
              {row.getValue('name')}
            </span>
            <p className="text-sm text-neutral-500">2 sub categories</p>
          </div>
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
          className="text-base text-neutral-500"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-base text-neutral-800">
            Clothing for men, women, and children
          </span>
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
          title="Brand"
          className="text-base text-neutral-500"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-base text-neutral-800">
            3 Brands
          </span>
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
          className="text-base text-neutral-500"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-base text-neutral-800">
            15 Products
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: () => <Actions />,
  },
];

export default columns;

import * as z from 'zod';
import Image from 'next/image';
import type { ColumnDef } from '@tanstack/react-table';

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
          onCheckedChange={(value) =>
            table.toggleAllPageRowsSelected(Boolean(value))
          }
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onClick={(e) => e.stopPropagation()}
          onCheckedChange={(value) => row.toggleSelected(Boolean(value))}
          aria-label="Select row"
        />
      );
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Brand name" />;
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
          <p className="truncate text-sm font-medium text-neutral-950">
            {row.getValue('name')}
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
      return <ColumnHeader column={column} title="Categories" />;
    },
    cell: () => {
      return (
        <div className="flex max-w-60 items-center space-x-2">
          <p className="truncate text-sm font-medium text-neutral-950">
            Clothes / Women&apos;s
          </p>
          <p className="text-brand-600-700 flex size-7 items-center justify-center rounded-full bg-[#C8E9E3] text-sm">
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
      return <ColumnHeader column={column} title="Products" />;
    },
    cell: () => {
      return (
        <p className="max-w-24 truncate text-sm font-medium text-neutral-950">
          123 <span className="text-[#4F5E5D]">Products</span>
        </p>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'created-at',
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Description" />;
    },
    cell: () => {
      return (
        <p className="max-w-[500px] truncate text-sm font-medium text-neutral-950">
          Clothing for men, women, and children
        </p>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'created-at',
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Last Modified On" />;
    },
    cell: () => {
      return (
        <span className="max-w-[200px] truncate text-sm font-medium text-neutral-950">
          21 Feb 2024, 8:43 pm
        </span>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];

export default columns;

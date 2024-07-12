import * as z from 'zod';
import Image from 'next/image';
import type { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@repo/ui/components/inputs/checkbox';
import { ColumnHeader } from '@repo/ui/components/table/column-header';

import Actions from './actions';
import { PopularIcon } from '@components/icons/popular-icon';

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
        <div className="flex translate-y-[2px] items-center gap-x-4">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(Boolean(value))}
            aria-label="Select row"
          />
          <button type="button">
            <PopularIcon className="size-5" />
          </button>
        </div>
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
            className="size-12 flex-shrink-0 rounded-full"
            src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
            alt="Image Description"
          />
          <span className="truncate text-base text-neutral-800">
            {row.getValue('name')}
          </span>
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
    cell: () => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] text-base text-neutral-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            alias qui distinctio architecto quas.
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
    cell: () => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[150px] truncate text-base text-neutral-800">
            15 Products
          </span>
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
          title="Modified On"
          className="text-base text-neutral-500"
        />
      );
    },
    cell: () => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[150px] truncate text-base text-neutral-800">
            1st Jan, 2024
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

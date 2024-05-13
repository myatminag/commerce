import Image from 'next/image';
import * as z from 'zod';
import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@repo/ui/components/inputs/checkbox';
import { ColumnHeader } from '@repo/ui/components/table/column-header';

import Actions from './actions';
import { SuccessIcon } from '@components/icons/status-icon';
import { PopularIcon } from '@components/icons/popular-icon';

export const productSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  sku: z.string(),
  isAvailable: z.boolean(),
  qty: z.number().int().positive(),
  price: z.string().transform((str) => parseFloat(str)),
  brand: z.object({
    id: z.string().uuid(),
    name: z.string(),
  }),
  category: z.object({
    id: z.string().uuid(),
    name: z.string(),
  }),
  images: z.array(
    z.object({
      id: z.string().uuid(),
      index: z.number().int(),
      image: z.string(),
      type: z.literal('image'),
    }),
  ),
});

type Product = z.infer<typeof productSchema>;

const column: ColumnDef<Product>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <div className="flex translate-y-[2px] items-center gap-x-4">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
        <button>
          <PopularIcon className="size-5" />
        </button>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <ColumnHeader column={column} title="Product" className="text-base" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <Image
            width={100}
            height={100}
            className="size-[44px] flex-shrink-0 rounded-sm"
            src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
            alt="Image Description"
          />
          <div className="max-w-[500px]">
            <span className="truncate text-base">{row.getValue('name')}</span>
            <p className="text-sm text-neutral-500">2 Variants</p>
          </div>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'category.name',
    header: ({ column }) => (
      <ColumnHeader column={column} title="Category" className="text-base" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[200px] space-x-2">
          <span className="truncate text-base">
            {row.original.category.name}
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'sku',
    header: ({ column }) => (
      <ColumnHeader column={column} title="Sku" className="text-base" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-base">
            {row.getValue('sku')}
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'isAvailable',
    header: ({ column }) => (
      <ColumnHeader column={column} title="Status" className="text-base" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          {row.getValue('isAvailable') ? (
            <span className="text-success inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-2 py-0.5 text-base">
              <SuccessIcon className="h-[14px] w-[14px]" />
              Publish
            </span>
          ) : (
            <span className="text-primary-100 bg-primary-100/30 inline-flex items-center gap-x-1 rounded-full px-2 py-0.5 text-base">
              <SuccessIcon className="h-[14px] w-[14px]" />
              Draft
            </span>
          )}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'qty',
    header: ({ column }) => (
      <ColumnHeader column={column} title="Stock" className="text-base" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-base">
            {row.getValue('qty')}
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <ColumnHeader column={column} title="Price" className="text-base" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-base font-medium">
            {row.getValue('price')} Ks
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: ({ row }) => <Actions />,
  },
];

export default column;

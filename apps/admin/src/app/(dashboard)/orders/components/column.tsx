import * as z from "zod";
import Link from "next/link";
import Image from "next/image";
import type { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@commerce/ui/components/inputs/checkbox";
import { ColumnHeader } from "@commerce/ui/components/table/column-header";

import Actions from "./actions";

const categorySchema = z.object({});

type Category = z.infer<typeof categorySchema>;

export const columns: ColumnDef<Category>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
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
          onCheckedChange={(value) => row.toggleSelected(Boolean(value))}
          aria-label="Select row"
        />
      );
    },
  },
  {
    accessorKey: "order-id",
    header: ({ column }) => {
      return (
        <ColumnHeader
          column={column}
          title="Order ID"
          className="text-base text-neutral-500"
        />
      );
    },
    cell: () => {
      return (
        <div className="flex max-w-[100px] items-center gap-x-3">
          <div className="flex space-x-2">
            <Link
              href="/order-list/7583100"
              className="text-base text-neutral-800 hover:underline"
            >
              #7583100
            </Link>
          </div>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "customer",
    header: ({ column }) => {
      return (
        <ColumnHeader
          column={column}
          title="Customer"
          className="text-base text-neutral-500"
        />
      );
    },
    cell: () => {
      return (
        <div className="flex max-w-[300px] items-center gap-x-3">
          <Image
            width={100}
            height={100}
            className="size-[44px] flex-shrink-0 rounded-sm"
            src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
            alt="Image Description"
          />
          <div className="">
            <span className="truncate text-base text-neutral-800">
              Mathew Gustaffson
            </span>
            <p className="text-sm text-neutral-500">09987654321</p>
          </div>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "items",
    header: ({ column }) => {
      return (
        <ColumnHeader
          column={column}
          title="Items"
          className="text-base text-neutral-500"
        />
      );
    },
    cell: () => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] text-base text-neutral-800">
            3 Items
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <ColumnHeader
          column={column}
          title="Total"
          className="text-base text-neutral-500"
        />
      );
    },
    cell: () => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] text-base text-neutral-800">
            40,500 Ks
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <ColumnHeader
          column={column}
          title="Order Status"
          className="text-base text-neutral-500"
        />
      );
    },
    cell: () => {
      return (
        <div className="flex space-x-2">
          <span className="text-success border-success inline-flex items-center gap-x-1 rounded-md border bg-teal-100 px-3 py-0.5 text-sm">
            Success
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "order-date",
    header: ({ column }) => {
      return (
        <ColumnHeader
          column={column}
          title="Order Date"
          className="text-base text-neutral-500"
        />
      );
    },
    cell: () => {
      return (
        <div className="flex space-x-2">
          <span className="truncate text-base text-neutral-800">
            21 Feb 2024, 8:43 pm
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <ColumnHeader
          column={column}
          title="Payment"
          className="text-base text-neutral-500"
        />
      );
    },
    cell: () => {
      return (
        <div className="flex space-x-2">
          <span className="text-success border-success inline-flex items-center gap-x-1 rounded-md border bg-teal-100 px-3 py-0.5 text-sm">
            Success
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: () => <Actions />,
  },
];

export default columns;

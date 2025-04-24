import * as z from "zod";
import Link from "next/link";
import { CircleAlertIcon, EllipsisIcon } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@workspace/ui/components/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog";
import { Button } from "@workspace/ui/components/button";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { ColumnHeader } from "@workspace/ui/components/column-header";

import { status } from "@/src/components/status";

const orderSchema = z.object({});

type Category = z.infer<typeof orderSchema>;

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
      return <ColumnHeader column={column} title="Order ID" />;
    },
    cell: () => {
      return <p className="truncate text-sm text-neutral-950">AJ1295DWMG90</p>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "customer",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Customer" />;
    },
    cell: () => {
      return (
        <p className="truncate text-sm text-neutral-950">Mathew Gustaffson</p>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "phone-no",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Items" />;
    },
    cell: () => {
      return <p className="truncate text-sm text-neutral-950">3 Items</p>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "total-items",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Total Price" />;
    },
    cell: () => {
      return (
        <p className="truncate text-sm text-neutral-950">
          {Number(4500000).toLocaleString()} Ks
        </p>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "payment-status",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Payment Status" />;
    },
    cell: () => {
      return <div className="text-center">{status("pending")}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "order-status",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Order Status" />;
    },
    cell: () => {
      return <div className="text-center">{status("publish")}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "order-date",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Order Date" />;
    },
    cell: () => {
      return (
        <p className="max-w-[200px] truncate text-sm text-neutral-950">
          21 Feb 2024, 8:43 pm
        </p>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "action",
    header: () => {
      return <span className="sr-only">Actions</span>;
    },
    cell: () => {
      return (
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild role="dropdown">
              <div className="flex justify-start">
                <Button
                  size="icon"
                  variant="none"
                  className="cursor-pointer shadow-none"
                  aria-label="Edit item"
                >
                  <EllipsisIcon size={16} aria-hidden="true" />
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem className="hover:bg-background cursor-pointer">
                  <Link
                    href="/orders/AJ1295DWMG90"
                    className="flex w-full items-center justify-between"
                  >
                    <span>Detail</span>
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-background cursor-pointer">
                  <span>Status</span>
                  <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <AlertDialogTrigger className="w-full">
                <DropdownMenuItem className="text-danger-500 focus:text-danger-500 hover:bg-background cursor-pointer">
                  <span>Delete</span>
                  <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
              </AlertDialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialogContent className="max-w-sm gap-y-6">
            <AlertDialogHeader className="gap-y-3">
              <AlertDialogTitle className="text-md flex items-center gap-x-2">
                <div className="bg-danger-500/10 flex size-10 items-center justify-center rounded-full">
                  <CircleAlertIcon
                    size={20}
                    className="text-danger-500 opacity-80"
                  />
                </div>
                Confirm Deletion
              </AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this order? <br /> This action
                cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="h-10">Cancel</AlertDialogCancel>
              <AlertDialogAction className="border-danger-400 hover:bg-danger-400/90 bg-danger-400 h-10 text-white">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];

export default columns;

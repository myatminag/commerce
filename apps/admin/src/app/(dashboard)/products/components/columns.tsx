import Image from "next/image";
import Link from "next/link";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisIcon,
  CircleAlertIcon,
} from "lucide-react";
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

import { paymentStatus } from "@/src/components/payment-status";
import { Products } from "./data";

export const columns: ColumnDef<Products>[] = [
  {
    id: "expander",
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <Button
          {...{
            className: "size-7 shadow-none text-muted-foreground",
            onClick: row.getToggleExpandedHandler(),
            "aria-expanded": row.getIsExpanded(),
            "aria-label": row.getIsExpanded()
              ? `Collapse details for ${row.original.name}`
              : `Expand details for ${row.original.name}`,
            size: "icon",
            variant: "none",
            role: "expander",
          }}
        >
          {row.getIsExpanded() ? (
            <ChevronUpIcon size={16} />
          ) : (
            <ChevronDownIcon size={16} />
          )}
        </Button>
      ) : undefined;
    },
  },
  {
    id: "select",
    header: function HeaderComponent({ table }) {
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
    cell: function CellComponent({ row }) {
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
    accessorKey: "name",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Product name" />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[200px] items-center gap-x-3">
          <Image
            width={100}
            height={100}
            className="size-10 flex-shrink-0 rounded-sm"
            src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
            alt="Image Description"
          />
          <div className="truncate">
            <p className="truncate text-sm text-neutral-950">
              {row.getValue("name")}
            </p>
            <p className="text-xs font-medium text-neutral-400">
              SKU: 135341905934
            </p>
          </div>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Price" />;
    },
    cell: () => {
      return (
        <div className="flex max-w-40 items-center space-x-2">
          <p className="truncate text-sm text-neutral-950">
            {Number(4500000).toLocaleString()} Ks
          </p>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Stock" />;
    },
    cell: () => {
      return (
        <p className="max-w-24 truncate text-sm text-neutral-950">
          6 <span className="text-[#4F5E5D]">left</span>
        </p>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "brand",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Brand" />;
    },
    cell: () => {
      return (
        <p className="max-w-24 truncate text-sm text-neutral-950">Apple</p>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Category" />;
    },
    cell: () => {
      return (
        <p className="max-w-24 truncate text-sm text-neutral-950">Macbook</p>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Status" />;
    },
    cell: () => {
      return paymentStatus("publish");
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "created-at",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Created At" />;
    },
    cell: () => {
      return (
        <p className="max-w-[500px] truncate text-sm text-neutral-950">
          21 Feb 2024, 8:43 pm
        </p>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "updated-at",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Updated At" />;
    },
    cell: () => {
      return (
        <span className="max-w-[200px] truncate text-sm text-neutral-950">
          21 Feb 2024, 8:43 pm
        </span>
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
                  <span>Detail</span>
                  <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-background cursor-pointer">
                  <Link
                    href="/categories/update?id=121"
                    className="flex w-full items-center justify-between"
                  >
                    <span>Update</span>
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-background cursor-pointer">
                  <span>Draft</span>
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
                Are you sure you want to delete this product? <br /> This action
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

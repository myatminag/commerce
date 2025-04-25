import Image from "next/image";
import Link from "next/link";
import { EllipsisIcon, CircleAlertIcon } from "lucide-react";
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
import { Customer } from "./data";

export const columns: ColumnDef<Customer>[] = [
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
    accessorKey: "cid",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Customer Id" />;
    },
    cell: () => {
      return <p className="truncate text-sm text-neutral-950">AYD6613FW12B</p>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Customer name" />;
    },
    cell: () => {
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
            <p className="truncate text-sm text-neutral-950">Peter Miranda</p>
          </div>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Phone Number" />;
    },
    cell: () => {
      return <p className="truncate text-sm text-neutral-950">09123456789</p>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Email" />;
    },
    cell: () => {
      return (
        <p className="max-w-44 truncate text-sm text-neutral-950">
          peter.miranda@gmail.com
        </p>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "city",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="City" />;
    },
    cell: () => {
      return <p className="truncate text-sm text-neutral-950">Yangon</p>;
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
      return status("active");
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "joined-at",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Joined Date" />;
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
                    href="/customers/AYD6613FW12B"
                    className="flex w-full items-center justify-between"
                  >
                    <span>Detail</span>
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                  </Link>
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
                Are you sure you want to delete this customer? <br /> This
                action cannot be undone.
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

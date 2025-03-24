import { HTMLAttributes } from "react";
import { Column } from "@tanstack/react-table";

import { cn } from "../../lib/utils";

interface ColumnHeaderProps<TData, TValue>
  extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export const ColumnHeader = <TData, TValue>({
  column,
  title,
  className,
}: ColumnHeaderProps<TData, TValue>) => {
  if (!column?.getCanSort()) {
    return (
      <p className={cn("text-table-header text-sm font-medium", className)}>
        {title}
      </p>
    );
  }
};

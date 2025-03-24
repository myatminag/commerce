"use client";

import React from "react";

import { cn } from "@workspace/ui/libs/utils";

import { useAppSelector } from "@store/hook";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isExpandable = useAppSelector((state) => state.expandable.isExpandable);

  return (
    <main
      className={cn(
        "relative min-h-screen flex-1 transition-all duration-300",
        {
          "ml-20": !isExpandable,
          "ml-[230px]": isExpandable,
        },
      )}
    >
      {children}
    </main>
  );
};

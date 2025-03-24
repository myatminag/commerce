"use client";

import Image from "next/image";
import { ComponentProps } from "react";

import { NavLinks } from "@/src/lib/pathnames";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@workspace/ui/components/sidebar";

import { ExpandableIcon } from "../icons/expandable-icon";

import NavLink from "./nav-link";

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-x-2 py-2 ps-4">
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="AYA PAY"
            className="size-8"
          />
          <p className="text-md truncate text-left font-semibold leading-tight group-data-[collapsible=icon]:hidden">
            ATX Commerce
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavLink items={NavLinks} />
      </SidebarContent>
      <SidebarRail>
        <div className="absolute left-[50%] top-4 z-50 hidden -translate-x-1/2 transform md:block">
          <ExpandableIcon className="size-8" />
        </div>
      </SidebarRail>
    </Sidebar>
  );
}

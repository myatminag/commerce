"use client";

import Image from "next/image";
import { ComponentProps } from "react";

import { NavMenu } from "@lib/pathnames";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@commerce/ui/components/sidebar";

import { NavMain } from "./nav-main";
import { ExpandableIcon } from "@components/icons/expandable-icon";

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
          <p className="text-md text-primary truncate text-left font-semibold leading-tight group-data-[collapsible=icon]:hidden">
            ATX Commerce
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={NavMenu} />
      </SidebarContent>
      <SidebarRail>
        <div className="absolute left-[50%] top-4 z-50 hidden -translate-x-1/2 transform md:block">
          <ExpandableIcon className="size-8" />
        </div>
      </SidebarRail>
    </Sidebar>
  );
}

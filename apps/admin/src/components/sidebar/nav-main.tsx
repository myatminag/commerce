"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { cn } from "@commerce/ui/libs/utils";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@commerce/ui/components/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@commerce/ui/components/sidebar";

import { BrandIcon } from "@components/icons/brand-icon";
import { CategoryIcon } from "@components/icons/category-icon";
import { CustomerIcon } from "@components/icons/customer-icon";
import { DashboardIcon } from "@components/icons/dashboard-icon";
import { OrderIcon } from "@components/icons/order-icon";
import { ProductsIcon } from "@components/icons/product-icon";
import { SettingIcon } from "@components/icons/setting-icon";

const icons = {
  dashboard: DashboardIcon,
  products: ProductsIcon,
  categories: CategoryIcon,
  brands: BrandIcon,
  orders: OrderIcon,
  customers: CustomerIcon,
  settings: SettingIcon,
};

export type NavItems = {
  title: string;
  url: string;
  icon?: keyof typeof icons;
  isCollapsible?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

export interface NavMainProps {
  items: NavItems[];
}

export function NavMain({ items }: NavMainProps) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sm font-semibold text-[#2F575380]">
        Main Menu
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          if (item.icon) {
            const isActive = pathname === item.url;
            const IconComponent = icons[item.icon];

            return item.isCollapsible ? (
              <Collapsible
                key={item.title}
                asChild
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className="group-data-[state=open]/collapsible:bg-brand-600 h-10 text-neutral-700 group-data-[state=open]/collapsible:text-white"
                    >
                      <IconComponent />
                      <span className="ml-2 text-sm font-medium">
                        {item.title}
                      </span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.url}>
                              <span className="ml-3 text-sm font-medium text-neutral-700">
                                {subItem.title}
                              </span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={cn("text- h-10 text-neutral-700", {
                    "bg-brand-600 hover:bg-brand-600 text-white hover:text-white":
                      isActive,
                  })}
                >
                  <Link href={item.url} className="space-x-2">
                    <span
                      className={cn("text-[#64716F]", {
                        "text-white": isActive,
                      })}
                    >
                      <IconComponent />
                    </span>
                    <span className="ml-2 text-sm font-medium">
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

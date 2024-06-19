'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/ui/components/accordion';
import { cn } from '@repo/ui/libs/utils';

import { MarketingLinks, CatalogLinks } from '@constants/links';

import { NavLink } from './nav-link';
import { DashboardIcon } from '../icons/dashboard-icon';
import { CategoryIcon } from '../icons/category-icon';
import { MarketingIcon } from '../icons/marketing-icon';
import { OrderIcon } from '../icons/order-icon';
import { MemberPointIcon } from '../icons/member-point';
import { CustomerIcon } from '../icons/customer-icon';
import { PermissionIcon } from '../icons/permission-icon';
import { SettingIcon } from '../icons/setting-icon';
import { LogoutIcon } from '../icons/logout-icon';

export const SideNav = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 start-0 top-0 z-[30] hidden w-64 -translate-x-full transform overflow-y-auto border-e border-gray-200 bg-white pb-10 pt-6 transition-all duration-300 lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar]:w-2">
      <p className="flex-none px-9 text-xl font-semibold">CDS Admin</p>

      <nav className="p-6">
        <ul className="space-y-3">
          <NavLink
            path="/"
            name="Dashboard"
            icon={
              <DashboardIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700', {
                  'text-primary': pathname === '/',
                })}
              />
            }
          />

          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="products">
              <AccordionTrigger className="flex w-full items-center gap-x-3.5 rounded-md px-2.5 py-2 text-base font-normal hover:bg-neutral-100">
                <CategoryIcon className="[data-disabled] size-5 flex-shrink-0 text-neutral-700" />
                Catalog
              </AccordionTrigger>
              <AccordionContent className="ps-2 pt-2">
                {CatalogLinks.map((product) => (
                  <Link
                    key={product.id}
                    className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href={product.path}
                  >
                    {product.name}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="marketing">
              <AccordionTrigger className="flex w-full items-center gap-x-3.5 rounded-md px-2.5 py-2 text-base font-normal hover:bg-neutral-100">
                <MarketingIcon className="[data-disabled] size-5 flex-shrink-0 text-neutral-700" />
                Marketing
              </AccordionTrigger>
              <AccordionContent className="ps-2 pt-2">
                {MarketingLinks.map((marketing) => (
                  <Link
                    key={marketing.id}
                    className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href={marketing.path}
                  >
                    {marketing.name}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <NavLink
            path="/order-list"
            name="Orders"
            icon={
              <OrderIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700', {
                  'text-primary': pathname === '/order-list',
                })}
              />
            }
          />

          <NavLink
            path="/member-point"
            name="Member Point"
            icon={
              <MemberPointIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700', {
                  'text-primary': pathname === '/member-point',
                })}
              />
            }
          />

          <NavLink
            path="/customer-list"
            name="Customers"
            icon={
              <CustomerIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700', {
                  'text-primary': pathname === '/customer-list',
                })}
              />
            }
          />

          <hr />

          <NavLink
            path="/role-permission"
            name="Role & Permission"
            icon={
              <PermissionIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700', {
                  'text-primary': pathname === '/role-permission',
                })}
              />
            }
          />

          <NavLink
            path="/setting"
            name="Setting"
            icon={
              <SettingIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700', {
                  'text-primary': pathname === '/setting',
                })}
              />
            }
          />

          <button
            onClick={() => signOut({ callbackUrl: 'http://localhost:3001' })}
            className="flex w-full items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-base text-neutral-700 hover:bg-gray-100"
          >
            <LogoutIcon className="size-5 flex-shrink-0 text-neutral-700" />
            Logout
          </button>
        </ul>
      </nav>
    </aside>
  );
};

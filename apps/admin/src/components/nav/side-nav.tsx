'use client';

import { usePathname } from 'next/navigation';

import { cn } from '@repo/ui/libs/utils';

import { NavLink } from './nav-link';
import { DashboardIcon } from '../icons/dashboard-icon';
import { CategoryIcon } from '../icons/category-icon';

export const SideNav = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 start-0 top-0 z-30 hidden w-[240px] -translate-x-full transform overflow-y-auto border-e border-gray-200 bg-white pb-10 pt-6 transition-all duration-300 lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar]:w-2">
      <nav className="pt-16">
        <ul className="space-y-1.5">
          <NavLink
            path="/"
            name="Dashboard"
            icon={
              <DashboardIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700', {
                  'text-primary-700': pathname === '/',
                })}
              />
            }
          />

          <NavLink
            path="/category-list"
            name="Category"
            icon={
              <CategoryIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700', {
                  'text-primary-700': pathname === '/category-list',
                })}
              />
            }
          />

          {/* 
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
          </Accordion> */}

          {/* <button
            onClick={() => signOut({ callbackUrl: 'http://localhost:3001' })}
            className="flex w-full items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-base text-neutral-700 hover:bg-gray-100"
          >
            <LogoutIcon className="size-5 flex-shrink-0 text-neutral-700" />
            Logout
          </button> */}
        </ul>
      </nav>
    </aside>
  );
};

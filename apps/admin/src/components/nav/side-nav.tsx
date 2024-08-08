'use client';

import { usePathname } from 'next/navigation';

import { cn } from '@repo/ui/libs/utils';
import { CdsIcon } from '@repo/ui/icons/cds-icon';

import { useAppSelector, useAppDispatch } from '@store/hook';
import { toggleExpandable } from '@store/features/expandable.slice';

import { NavItem } from './nav-item';
import { DashboardIcon } from '@components/icons/dashboard-icon';
import { CategoryIcon } from '@components/icons/category-icon';
import { ExpandableIcon } from '@components/icons/expandable-icon';

export const SideNav = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const isExpandable = useAppSelector((state) => state.expandable.isExpandable);

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-50 w-[86px] transform border-r bg-white transition-all duration-300',
        {
          'w-[230px]': isExpandable,
        },
      )}
    >
      <button
        type="button"
        onClick={() => dispatch(toggleExpandable())}
        className="absolute left-full top-4 z-50 -translate-x-1/2 transform"
      >
        <ExpandableIcon />
      </button>
      <div className="flex h-[64px] items-center border-b pl-4">
        <CdsIcon className="text-brand-600 size-12" />
        <p
          className={cn('text-md hidden font-extrabold text-neutral-950', {
            block: isExpandable,
          })}
        >
          Capture Digital
        </p>
      </div>
      <div className="pt-10">
        <NavItem
          path="/"
          name="Dashboard"
          icon={
            <div
              className={cn(
                'flex h-[40px] w-[60px] items-center justify-center rounded-lg',
                {
                  'bg-[#E4FEF7]': pathname === '/',
                },
              )}
            >
              <DashboardIcon
                className={cn('size-5 flex-shrink-0 text-neutral-950', {
                  'text-brand-700': pathname === '/',
                })}
              />
            </div>
          }
        />

        <NavItem
          path="/category-list"
          name="Categories"
          icon={
            <div
              className={cn(
                'flex h-[40px] w-[60px] items-center justify-center rounded-lg',
                {
                  'bg-[#E4FEF7]': pathname === '/category-list',
                },
              )}
            >
              <CategoryIcon
                className={cn('size-5 flex-shrink-0 text-neutral-950', {
                  'text-brand-700': pathname === '/category-list',
                })}
              />
            </div>
          }
        />
      </div>
    </aside>
  );
};

'use client';

import { usePathname } from 'next/navigation';

import { cn } from '@repo/ui/libs/utils';
import { CdsIcon } from '@repo/ui/icons/cds-icon';
import { Separator } from '@repo/ui/components/separator';

import { useAppSelector, useAppDispatch } from '@store/hook';
import { toggleExpandable } from '@store/features/expandable.slice';

import { NavMenu } from '@lib/pathnames';

import { NavItem } from './nav-item';
import { DashboardIcon } from '@components/icons/dashboard-icon';
import { CategoryIcon } from '@components/icons/category-icon';
import { ProductsIcon } from '@components/icons/product-icon';
import { ExpandableIcon } from '@components/icons/expandable-icon';
import { BrandIcon } from '@components/icons/brand-icon';
import { OrderIcon } from '@components/icons/order-icon';
import { CustomerIcon } from '@components/icons/customer-icon';
import { PersonalizationIcon } from '@components/icons/personalization-icon';
import { SettingIcon } from '@components/icons/setting-icon';

export interface NavItemProps {
  path?: string;
  name?: string;
  iconKey?: keyof typeof icons;
  separator?: string;
}

interface IconWrapperProps {
  path: string;
  children: React.ReactNode;
}

const icons = {
  dashboard: DashboardIcon,
  products: ProductsIcon,
  categories: CategoryIcon,
  brands: BrandIcon,
  orders: OrderIcon,
  customers: CustomerIcon,
  personalization: PersonalizationIcon,
  settings: SettingIcon,
};

const IconWrapper = ({ path, children }: IconWrapperProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'flex h-[40px] w-[60px] items-center justify-center rounded-lg',
        {
          'bg-[#E4FEF7]': pathname === path,
        },
      )}
    >
      {children}
    </div>
  );
};

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
        {NavMenu.map(({ path, name, iconKey, separator }) => {
          if (separator) {
            return <Separator key={separator} className="my-3" />;
          }

          if (path && name && iconKey) {
            const IconComponent = icons[iconKey];

            return (
              <NavItem
                key={path}
                path={path}
                name={name}
                icon={
                  <IconWrapper path={path}>
                    <IconComponent
                      className={cn('size-5 flex-shrink-0 text-[#64716F]', {
                        'text-brand-700': pathname === path,
                      })}
                    />
                  </IconWrapper>
                }
              />
            );
          }
          return null; // fallback for invalid nav items
        })}
      </div>
    </aside>
  );
};

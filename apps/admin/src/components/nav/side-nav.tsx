'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@repo/ui/libs/utils';
import { CdsIcon } from '@repo/ui/icons/cds-icon';
import { Separator } from '@repo/ui/components/separator';

import { NavMenu } from '@lib/pathnames';

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

export const SideNav = () => {
  const pathname = usePathname();

  const [isExpandable, setIsExpandable] = useState(true);

  return (
    <aside
      className={cn(
        'relative z-50 h-full w-20 transform border-r bg-white transition-all duration-300',
        {
          'w-60': isExpandable,
        },
      )}
    >
      <button
        type="button"
        onClick={() => setIsExpandable((prev) => !prev)}
        className="absolute left-full top-4 z-50 -translate-x-1/2 transform"
      >
        <ExpandableIcon />
      </button>
      <div className="flex h-[64px] items-center border-b pl-4">
        <div>
          <CdsIcon className="text-brand-600 size-12" />
        </div>
        <p
          className={cn(
            'text-md origin-left font-extrabold text-neutral-950 duration-300',
            {
              'scale-0': !isExpandable,
            },
          )}
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
              <Link
                key={path}
                className={cn(
                  'flex items-center py-1 pl-3 text-sm font-semibold text-neutral-700',
                  {
                    'text-brand-700 border-brand-600 border-r-[3px] bg-[#E4FEF7]':
                      pathname === path,
                    'border-none bg-transparent': !isExpandable,
                  },
                )}
                href={path}
              >
                <div>
                  <div
                    className={cn(
                      'flex h-[40px] w-[60px] items-center justify-center rounded-lg',
                      {
                        'bg-[#E4FEF7]': pathname === path,
                      },
                    )}
                  >
                    <IconComponent
                      className={cn('size-5 flex-shrink-0 text-[#64716F]', {
                        'text-brand-700': pathname === path,
                      })}
                    />
                  </div>
                </div>
                <p
                  className={cn('origin-left duration-300', {
                    hidden: !isExpandable,
                  })}
                >
                  {isExpandable ? name : null}
                </p>
              </Link>
            );
          }
          return null; // fallback for invalid nav items
        })}
      </div>
    </aside>
  );
};

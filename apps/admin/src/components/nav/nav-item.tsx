import Link from 'next/link';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@repo/ui/libs/utils';

interface NavLinkProps {
  path: string;
  name: string;
  icon: ReactNode;
}

export const NavLink = ({ path, name, icon }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        'flex items-center gap-x-3.5 px-6 py-3 text-sm text-neutral-950',
        {
          'text-brand-700 border-brand-600 border-r-[3px] bg-[#D7F8D4] font-semibold':
            pathname === path,
        },
      )}
      href={path}
    >
      {icon}
      {name}
    </Link>
  );
};

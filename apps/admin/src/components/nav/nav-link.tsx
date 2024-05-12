import Link from 'next/link';
import { ReactNode } from 'react';
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
        'flex items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-base text-neutral-700 hover:bg-gray-100',
        {
          'text-primary-100': pathname === path,
        },
      )}
      href={path}
    >
      {icon}
      {name}
    </Link>
  );
};

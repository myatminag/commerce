import type { ReactNode } from 'react';

import { HeaderNav } from '@components/nav/header';
import { SideNav } from '@components/nav/side-nav';
import { DashboardLayout } from '@components/layouts/dashboard-layout';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full bg-[#F0F5F4]">
      <SideNav />

      <HeaderNav />

      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
};

export default Layout;

import { SideNav } from '@components/nav/side-nav';
import { HeaderNav } from '@components/nav/header';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex h-[calc(100dvh)] w-full overflow-hidden bg-[#F0F5F4]">
      <SideNav />

      <div className="relative flex flex-1 flex-col overflow-auto pb-10">
        <HeaderNav />
        {children}
      </div>
    </main>
  );
};

export default Layout;

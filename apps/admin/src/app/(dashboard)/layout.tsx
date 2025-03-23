import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@commerce/ui/components/sidebar";

import { AppSidebar } from "@components/sidebar/app-sidebar";

export default function Page({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 block size-5 md:hidden" />
          </div>
        </header>
        <main className="flex h-[calc(100dvh)] w-full overflow-hidden bg-[#F0F5F4] p-4">
          <div className="relative flex flex-1 flex-col overflow-auto pb-10">
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

import Image from "next/image";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import { Button } from "@workspace/ui/components/button";

import { AppSidebar } from "@/src/components/sidebar/app-sidebar";
import { TranslationIcon } from "@/src/components/icons/translation-icon";

export default function Page({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
          <div className="flex w-full items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 block size-5 md:hidden" />
            <div className="ml-auto flex items-center gap-x-3">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Notification"
                className="rounded-full bg-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <path
                    fill="#01322D"
                    d="M17.778 16.407a.75.75 0 0 0-.456-1.43zm-6.098-.473a.75.75 0 1 0 .04 1.5zm5.196.08a.75.75 0 0 0 1.348-.66zm.034-1.64-.688.299.014.03zm-.968-3.568.745-.09-.005-.033zm-4.235-4.865a.75.75 0 0 0 0 1.5zm0 1.5a.75.75 0 0 0 0-1.5zm-4.25 3.366-.74-.123-.004.033zm-.968 3.567.674.33.014-.031zm-1.313.98a.75.75 0 0 0 1.348.66zm5.78-8.663a.75.75 0 0 0 1.5 0zM12.457 5a.75.75 0 0 0-1.5 0zm-1.5 1.691a.75.75 0 0 0 1.5 0zM12.457 5a.75.75 0 0 0-1.5 0zm-6.378 9.977a.75.75 0 0 0-.456 1.43zm5.602 2.457a.75.75 0 1 0 .04-1.5zm-1.18-.911a.75.75 0 0 0-1.5 0zm3.905 0a.75.75 0 0 0-1.5 0zm2.917-1.546c-1.83.584-3.728.906-5.642.957l.04 1.5a21.9 21.9 0 0 0 6.058-1.027zm.902.378-.64-1.31-1.348.658.64 1.31zm-.626-1.28c-.463-1.067-.77-2.2-.911-3.36l-1.49.181a13.6 13.6 0 0 0 1.025 3.777zm-.916-3.392c-.213-1.28-.665-2.468-1.487-3.344-.843-.897-2.008-1.398-3.488-1.398v1.5c1.112 0 1.866.362 2.394.925.548.583.917 1.453 1.101 2.563zm-4.975-4.742c-1.48 0-2.649.5-3.494 1.397-.826.876-1.282 2.064-1.495 3.346l1.48.246c.184-1.109.555-1.979 1.106-2.563.532-.564 1.29-.926 2.403-.926zm-4.994 4.776a12 12 0 0 1-.911 3.358l1.375.598c.522-1.2.867-2.473 1.025-3.776zm-.898 3.328-.64 1.31 1.349.658.64-1.31zm6.642-7.354V5h-1.5v1.691zm0 0V5h-1.5v1.691zm-6.835 9.716c1.963.625 4.002.971 6.058 1.027l.04-1.5a20.4 20.4 0 0 1-5.642-.957zM9 16.523v.5h1.5v-.5zm0 .5c0 1.502 1.192 2.753 2.702 2.753v-1.5c-.646 0-1.202-.543-1.202-1.253zm2.702 2.753c1.51 0 2.703-1.25 2.703-2.753h-1.5c0 .71-.556 1.253-1.203 1.253zm2.703-2.753v-.5h-1.5v.5z"
                  ></path>
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Translation"
                className="rounded-full bg-transparent"
              >
                <TranslationIcon aria-hidden="true" className="size-4" />
              </Button>
              <Button variant="ghost" className="gap-0 rounded-full py-0 ps-0">
                <div className="me-0.5 flex aspect-square h-full p-1">
                  <Image
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Profile image"
                    width={50}
                    height={50}
                    aria-hidden="true"
                    className="h-auto w-full rounded-full"
                  />
                </div>
                <p className="text-brand-900 text-sm font-semibold">
                  Alex.M Hopkin
                </p>
              </Button>
            </div>
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

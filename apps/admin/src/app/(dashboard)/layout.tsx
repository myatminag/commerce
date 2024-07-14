import type { ReactNode } from 'react';
import Image from 'next/image';

import { CdsIcon } from '@repo/ui/icons/cds-icon';
import { NotiIcon } from '@repo/ui/icons/noti-icon';

import { SideNav } from '@components/nav/side-nav';
import { SettingIcon } from '@components/icons/setting-icon';
import { TranslationIcon } from '@components/icons/translation-icon';
import CreateIcon from '@components/icons/create-icon';
import { SearchInput } from '@repo/ui/components/inputs/search-input';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="sticky inset-x-0 top-0 z-20 border-y bg-white px-4 sm:px-6 md:px-8 lg:hidden dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center py-4">
          {/* Navigation Toggle */}
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="size-5"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          {/* End Navigation Toggle */}
          {/* Breadcrumb */}
          <ol
            className="ms-3 flex items-center whitespace-nowrap"
            aria-label="Breadcrumb"
          >
            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
              Application Layout
              <svg
                className="mx-3 size-2.5 flex-shrink-0 overflow-visible text-gray-400 dark:text-gray-600"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </li>
            <li
              className="truncate text-sm font-semibold text-gray-800 dark:text-gray-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
          {/* End Breadcrumb */}
        </div>
      </div>

      <SideNav />

      <main className="min-h-screen w-full bg-[#F0F5F4]">
        <header className="flex h-[64px] w-full flex-wrap border-b bg-white text-sm shadow-sm sm:flex-nowrap sm:justify-start lg:fixed lg:top-0 lg:z-50 lg:bg-white lg:py-4">
          <nav className="flex w-full basis-full items-center justify-between px-4 lg:px-6">
            <div className="flex flex-shrink-0 items-center">
              <CdsIcon className="text-brand-600 size-12" />
              <p className="text-md font-extrabold text-neutral-950">
                Capture Digital
              </p>
            </div>
            <div className="ml-16 w-96 flex-shrink-0">
              <SearchInput
                className="rounded-full bg-[#F1F7F6]"
                placeholder="Search products..."
              />
            </div>
            <div className="ms-auto flex w-full items-center justify-end lg:order-3 lg:gap-x-3">
              <div className="flex flex-row items-center justify-end gap-x-4">
                <button type="button">
                  <CreateIcon />
                </button>
                <button
                  type="button"
                  className="border-border inline-flex size-10 items-center justify-center rounded-full border"
                >
                  <SettingIcon className="size-6 flex-shrink-0 text-neutral-700" />
                </button>
                <button
                  type="button"
                  className="border-border inline-flex size-10 items-center justify-center rounded-full border"
                >
                  <NotiIcon className="size-6 flex-shrink-0 text-neutral-700" />
                </button>
                <button
                  type="button"
                  className="border-border inline-flex size-10 items-center justify-center rounded-full border"
                >
                  <TranslationIcon className="size-5 flex-shrink-0 text-neutral-700" />
                </button>
                <div className="bg-brand-50 border-border inline-flex items-center gap-x-1.5 rounded-full border p-1">
                  <Image
                    className="inline-block size-10 rounded-full"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                    width={150}
                    height={150}
                  />
                  <p className="text-brand-900 pr-1 text-sm font-bold">
                    Super Admin
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;

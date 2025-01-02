"use client";

import Image from "next/image";

import { NotiIcon } from "@commerce/ui/icons/noti-icon";
import { SearchInput } from "@commerce/ui/components/inputs/search-input";

import { CreateIcon } from "@components/icons/create-icon";
import { TranslationIcon } from "@components/icons/translation-icon";

export const HeaderNav = () => {
  return (
    <header className="flex h-[64px] border-b bg-white text-sm shadow-sm transition-all duration-300 sm:flex-nowrap sm:justify-start lg:sticky lg:inset-x-0 lg:top-0 lg:z-40 lg:w-full lg:bg-white lg:py-4">
      <nav className="flex w-full items-center justify-between px-4 lg:px-6">
        <div className="w-96 flex-shrink-0">
          <SearchInput
            className="rounded-full bg-[#F1F7F6]"
            placeholder="Search products..."
          />
        </div>
        <div className="lg:order-3 lg:gap-x-3">
          <div className="flex flex-row items-center justify-end gap-x-4">
            <button type="button">
              <CreateIcon />
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
  );
};

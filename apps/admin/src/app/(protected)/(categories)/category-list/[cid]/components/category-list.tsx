"use client";

import { cn } from "@commerce/ui/libs/utils";
import Link from "next/link";

import { useCategoryDetail } from "../use-category-detail";

import { PlusIcon } from "@components/icons/plus-icon";

const CATEGORY_LIST = [
  {
    id: 1,
    name: "Fashion & Accessories",
  },
  {
    id: 2,
    name: "Electronics",
  },
  {
    id: 3,
    name: "Health & Fitness",
  },
  {
    id: 4,
    name: "Kitchen Accessories",
  },
  {
    id: 5,
    name: "Beauty",
  },
];

const CategoryList = () => {
  const { isSelected, setIsSelected } = useCategoryDetail();

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-brand-900 text-lg font-bold">
          Category <span className="text-md font-normal">(32)</span>
        </h2>
        <Link
          href="/category-list/new-category"
          className="bg-brand-600 flex h-10 w-12 items-center justify-center rounded-md"
        >
          <PlusIcon className="text-white" />
        </Link>
      </div>
      <ul className="space-y-2 pt-6">
        {CATEGORY_LIST.map((data) => (
          <li
            key={data.id}
            onClick={() => setIsSelected(data.id)}
            className={cn(
              "flex h-14 items-center rounded-lg border border-[#A7E4DA] bg-white ps-5 text-sm font-medium text-neutral-950",
              {
                "bg-[#D5F5EF]": isSelected === data.id,
              },
            )}
          >
            {data.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryList;

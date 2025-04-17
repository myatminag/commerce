"use client";

import { Fragment } from "react";

import { Separator } from "@workspace/ui/components/separator";

import { CategoryIcon } from "@/src/components/icons/category-icon";

import SubCategoryForm from "./subcategory-form";

const SubCategoryData = [
  {
    id: 1,
    name: "Cosmetics",
  },
  {
    id: 2,
    name: "Electronics",
  },
  {
    id: 3,
    name: "Fashion",
  },
];

const SubCategoryList = () => {
  return (
    <div className="mt-6">
      {SubCategoryData.length > 0 ? (
        <div className="grid grid-cols-1 gap-y-4">
          {SubCategoryData.map((subCategory) => (
            <Fragment key={subCategory.id}>
              <div className="flex items-center gap-x-3">
                <CategoryIcon className="text-brand-600 size-4 shrink-0" />
                <p className="text-sm font-medium">{subCategory.name}</p>
              </div>

              <Separator className="bg-border-100" />
            </Fragment>
          ))}
        </div>
      ) : (
        <SubCategoryForm />
      )}
    </div>
  );
};

export default SubCategoryList;

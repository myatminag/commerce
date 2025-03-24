"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog/dialog";
import { Button } from "@workspace/ui/components/button";

import { EditIcon } from "@components/icons/edit-icon";
import { DeleteIcon } from "@components/icons/delete-icon";
import { CategoryIcon } from "@components/icons/category-icon";
import { SubCategoryFrameIcon } from "@components/icons/subcategory-frame-icon";
import { CreateSubCategory, SubCategoryForm } from "./add-subcategories";

const SUB_CATEGORY_DATA = [
  {
    id: 1,
    subCategoryName: "Cosmetics",
    totalSubCategory: 14,
    subCategoryType: [
      { id: 1, type: "Makeup" },
      { id: 2, type: "Ring" },
      { id: 3, type: "Footwear" },
      { id: 4, type: "Lipstick" },
    ],
  },
  {
    id: 2,
    subCategoryName: "Electronics",
    totalSubCategory: 14,
    subCategoryType: [
      { id: 1, type: "Makeup" },
      { id: 2, type: "Ring" },
      { id: 3, type: "Footwear" },
      { id: 4, type: "Lipstick" },
    ],
  },
  {
    id: 3,
    subCategoryName: "Fashion",
    totalSubCategory: 14,
    subCategoryType: [
      { id: 1, type: "Makeup" },
      { id: 2, type: "Ring" },
      { id: 3, type: "Footwear" },
      { id: 4, type: "Lipstick" },
    ],
  },
];

const SubCategoryList = () => {
  return (
    <>
      {SUB_CATEGORY_DATA.length > 0 ? (
        <Accordion
          defaultValue={SUB_CATEGORY_DATA[0].subCategoryName}
          type="single"
          collapsible
          className="mt-3"
        >
          {SUB_CATEGORY_DATA.map((data) => (
            <AccordionItem key={data.id} value={data.subCategoryName}>
              <AccordionTrigger className="my-3 h-8 text-sm font-semibold text-neutral-950">
                <CategoryIcon className="AccordionChevron text-brand-600 me-5 size-4 shrink-0 transition-transform duration-200" />
                {data.subCategoryName}{" "}
                <span className="ms-1 font-normal">
                  ({data.totalSubCategory})
                </span>
                <div className="ms-auto flex items-center gap-x-3">
                  <Dialog>
                    <DialogTrigger
                      asChild
                      type="button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <EditIcon className="size-8" />
                    </DialogTrigger>
                    <SubCategoryForm />
                  </Dialog>

                  <Dialog>
                    <DialogTrigger
                      asChild
                      type="button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <DeleteIcon className="size-8" />
                    </DialogTrigger>
                    <DialogContent onClick={(e) => e.stopPropagation()}>
                      <DialogHeader className="mt-10 space-y-3">
                        <DialogTitle className="text-md font-bold text-neutral-950">
                          Are you want to delete this sub category?
                        </DialogTitle>
                        <DialogDescription className="text-sm text-neutral-800">
                          This action cannot be undone. This will permanently
                          delete sub category and remove category type from sub
                          category.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <div className="flex items-center justify-end gap-x-3 px-4 py-4">
                          <DialogClose asChild>
                            <Button
                              type="button"
                              variant="outline"
                              className="w-[100px]"
                            >
                              Cancel
                            </Button>
                          </DialogClose>
                          <Button type="button" className="w-[100px]">
                            Continue
                          </Button>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </AccordionTrigger>
              <AccordionContent className="ms-10 space-y-5">
                {data.subCategoryType.map((categoryType) => (
                  <div
                    key={categoryType.id}
                    className="flex items-center gap-x-3"
                  >
                    <SubCategoryFrameIcon />
                    <p className="text-sm font-medium text-neutral-950">
                      {categoryType.type}
                    </p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <CreateSubCategory hasSubCategory={false} />
      )}
    </>
  );
};

export default SubCategoryList;

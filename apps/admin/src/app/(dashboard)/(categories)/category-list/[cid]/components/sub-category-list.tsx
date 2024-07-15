'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/ui/components/accordion';

import { SubCategoryFrameIcon } from '@components/icons/subcategory-frame-icon';

const SUB_CATEGORY_DATA = [
  {
    id: 1,
    subCategoryName: 'Cosmetics',
    totalSubCategory: 14,
    subCategoryType: [
      { id: 1, type: 'Makeup' },
      { id: 2, type: 'Ring' },
      { id: 3, type: 'Footwear' },
      { id: 4, type: 'Lipstick' },
    ],
  },
  {
    id: 2,
    subCategoryName: 'Electronics',
    totalSubCategory: 14,
    subCategoryType: [
      { id: 1, type: 'Makeup' },
      { id: 2, type: 'Ring' },
      { id: 3, type: 'Footwear' },
      { id: 4, type: 'Lipstick' },
    ],
  },
  {
    id: 3,
    subCategoryName: 'Fashion',
    totalSubCategory: 14,
    subCategoryType: [
      { id: 1, type: 'Makeup' },
      { id: 2, type: 'Ring' },
      { id: 3, type: 'Footwear' },
      { id: 4, type: 'Lipstick' },
    ],
  },
];

const SubCategoryList = () => {
  return (
    <Accordion type="single" collapsible className="-mt-4">
      {SUB_CATEGORY_DATA.map((data) => (
        <AccordionItem key={data.id} value={data.subCategoryName}>
          <AccordionTrigger className="my-3 h-8 text-sm font-semibold text-neutral-950">
            {data.subCategoryName}{' '}
            <span className="ms-1 font-normal">({data.totalSubCategory})</span>
          </AccordionTrigger>
          <AccordionContent className="ms-10 space-y-5">
            {data.subCategoryType.map((categoryType) => (
              <div key={categoryType.id} className="flex items-center gap-x-3">
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
  );
};

export default SubCategoryList;

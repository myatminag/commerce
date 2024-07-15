'use client';

import Image from 'next/image';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/tab';
import { Separator } from '@repo/ui/components/separator';

import SubCategoryList from './sub-category-list';
import RelatedProducts from './related-products';
import RelatedBrands from './related-brands';

import { EditIcon } from '@components/icons/edit-icon';
import { DeleteIcon } from '@components/icons/delete-icon';

import CategoryBanner from '@assets/temp/category-banner.png';
import CategoryThumbnail from '@assets/temp/category-thumbnail.png';

const CategoryInfo = () => {
  return (
    <>
      <div className="relative z-20 h-[189px]">
        <Image
          src={CategoryBanner}
          alt="category-banner"
          layout="fill"
          objectFit="cover"
          className="h-full w-full rounded-lg"
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#30615870] to-[#084C42] opacity-50" />
        <div className="absolute bottom-4 left-4 z-20 flex items-end gap-x-5">
          <Image
            src={CategoryThumbnail}
            alt="category-thumbnail"
            width={500}
            height={500}
            className="h-[159px] w-[150px] rounded-md"
          />
          <div className="space-y-2">
            <p className="text-xl font-bold text-white">
              Fashion & Accessories
            </p>
            <div className="flex items-center gap-x-3">
              <p className="text-base font-semibold text-white">
                256 <span className="font-light">products</span>
              </p>
              <div className="size-2 rounded-full bg-white" />
              <p className="text-base font-semibold text-white">
                30 <span className="font-light">brands</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute right-6 top-6 space-x-5">
          <button type="button">
            <EditIcon />
          </button>
          <button type="button">
            <DeleteIcon />
          </button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="mt-2 w-full">
        <TabsList className="w-full justify-start gap-x-6 border-b">
          <TabsTrigger value="overview" className="py-[14.5px]">
            Overview
          </TabsTrigger>
          <TabsTrigger value="related-products" className="py-[14.5px]">
            Related products
          </TabsTrigger>
          <TabsTrigger value="related-brands" className="py-[14.5px]">
            Related brands
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="flex items-start gap-x-10 p-3">
            <p className="flex w-36 flex-shrink-0 items-center justify-between text-sm font-medium text-neutral-950">
              Description <span className="">-</span>
            </p>
            <p className="text-sm font-light">
              Clothing serves as an essential means of protection, shielding our
              bodies from the elements and providing a barrier against external
              factors such as heat, cold, and environmental hazards.
            </p>
          </div>
          <Separator className="my-5" />
          <div className="flex items-start gap-x-10 p-3">
            <p className="flex w-36 flex-shrink-0 items-center justify-between text-sm font-medium text-neutral-950">
              Sub Categories <span className="">-</span>
            </p>
            <SubCategoryList />
          </div>
        </TabsContent>
        <TabsContent value="related-products">
          <RelatedProducts />
        </TabsContent>
        <TabsContent value="related-brands">
          <RelatedBrands />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default CategoryInfo;

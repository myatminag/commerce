'use client';

import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@repo/ui/components/dialog';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/inputs/input';
import { Label } from '@repo/ui/components/inputs/label';
import { Textarea } from '@repo/ui/components/inputs/text-area';
import { Checkbox } from '@repo/ui/components/inputs/checkbox';

import { CameraIcon } from '@components/icons/camera-icon';
import { CircleIcon } from '@components/icons/circle-icon';

import SubCategories from './sub-categories';
import AssociatedBrands from './associated-brands';

const NewCategoryForm = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 w-full rounded-md bg-white shadow-sm">
        <p className="text-heading border-b border-gray-200 p-4 font-medium text-neutral-800">
          Product Lists
        </p>
        <div className="mt-10 flex flex-col items-center">
          <p className="text-heading text-neutral-800">
            Start adding products in your category
          </p>
          <p className="text-base text-neutral-500">
            Create a new category to display on your site.
          </p>
          <div className="mt-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-gray-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAE9EA]">
              <CircleIcon className="text-primary-100 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 w-full rounded-md bg-white shadow-sm">
        <p className="text-heading border-b border-gray-200 p-4 font-medium text-neutral-800">
          Category Info
        </p>
        <form className="space-y-4 p-4">
          <div className="relative space-y-1">
            <label
              htmlFor="af-submit-app-upload-images"
              className="group block cursor-pointer rounded-md border-2 border-dashed border-gray-200 bg-[#FAE9EA] p-3 text-center lg:p-9"
            >
              <input
                id="af-submit-app-upload-images"
                name="af-submit-app-upload-images"
                type="file"
                className="sr-only"
              />
              <CameraIcon className="text-primary-100 mx-auto size-10" />
              <span className="mt-2 block text-base text-neutral-600">
                Add category cover photo
              </span>
            </label>
            <div className="relative">
              <div className="relative z-30 m-1 mx-auto -mt-8 h-24 w-24 overflow-hidden rounded-full border-4 border-solid border-white bg-[#FAE9EA]">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <CameraIcon className="text-primary-100 h-10 w-10" />
                </div>
              </div>
            </div>
          </div>

          <Input label="Category name" placeholder="Enter category name" />

          <Textarea
            label="Description"
            placeholder="Enter description here"
            rows={5}
          />

          <SubCategories />

          <AssociatedBrands />

          <div className="flex items-center gap-x-3">
            <Button type="button" variant="outline" className="w-full">
              Cancel
            </Button>
            <Button className="bg-primary-100 w-full">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCategoryForm;

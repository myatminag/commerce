'use client';

import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/inputs/input';
import { Textarea } from '@repo/ui/components/inputs/text-area';

import { CameraIcon } from '@components/icons/camera-icon';
import SelectProducts from './select-products';

const NewCategoryForm = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1 w-full rounded-md bg-white shadow-sm">
        <p className="text-heading border-b border-gray-200 p-4 font-medium text-neutral-800">
          Brand Info
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
              <span className="mt-2 block text-sm text-neutral-500">
                Set the brand thumbnail image.
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

          <Input label="Brand name" placeholder="Enter brand name" />

          <Textarea
            label="Description"
            placeholder="Enter description here"
            rows={5}
          />

          <div className="flex items-center gap-x-3">
            <Button
              type="button"
              variant="outline"
              className="text-primary-100 w-full bg-[#FAE9EA]"
            >
              Cancel
            </Button>
            <Button className="bg-primary-100 w-full">Save</Button>
          </div>
        </form>
      </div>
      <div className="col-span-2 w-full rounded-md bg-white shadow-sm">
        <p className="text-heading border-b border-gray-200 p-4 font-medium text-neutral-800">
          Product Lists
        </p>
        <div className="mt-10 flex flex-col items-center">
          <p className="text-heading text-neutral-800">
            Start adding products in your brand
          </p>
          <p className="text-base text-neutral-500">
            Create a new brand to display on your site.
          </p>
          <SelectProducts />
        </div>
      </div>
    </div>
  );
};

export default NewCategoryForm;

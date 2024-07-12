'use client';

import { UploadImageIcon } from '@components/icons/image-upload-icon';
import { Input } from '@repo/ui/components/inputs/input';
import { Textarea } from '@repo/ui/components/inputs/text-area';

const CategoryForm = () => {
  return (
    <>
      <div className="mt-6 grid grid-cols-3 gap-x-6">
        <div className="col-span-2">
          <label
            htmlFor="upload-banner"
            className="bg-upload-200 border-border-100 group flex h-48 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed text-center"
          >
            <input
              id="upload-banner"
              name="upload-banner"
              type="file"
              className="sr-only"
            />
            <div className="bg-upload-100 flex size-14 items-center justify-center rounded-full">
              <UploadImageIcon className="text-primary mx-auto" />
            </div>
            <p className="text-primary-900 mt-3 text-base font-medium">
              Banner Image
            </p>
            <p className="mt-3 text-sm text-[#506D6A]">
              Drop files here or{' '}
              <span className="text-primary font-medium">Browse</span>
            </p>
          </label>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="upload-thumbnail"
            className="bg-upload-200 border-border-100 group flex h-48 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed text-center"
          >
            <input
              id="upload-thumbnail"
              name="upload-thumbnail"
              type="file"
              className="sr-only"
            />
            <div className="bg-upload-100 flex size-14 items-center justify-center rounded-full">
              <UploadImageIcon className="text-primary mx-auto" />
            </div>
            <p className="text-primary-900 mt-3 text-base font-medium">
              Thumbnail Image
            </p>
            <p className="mt-3 text-sm text-[#506D6A]">
              Drop files here or{' '}
              <span className="text-primary font-medium">Browse</span>
            </p>
          </label>
        </div>
      </div>
      <form className="mt-6 space-y-4">
        <Input label="Category name" placeholder="Enter category name" />

        <Textarea
          label="Description"
          placeholder="Enter description"
          rows={8}
        />
      </form>
    </>
  );
};

export default CategoryForm;

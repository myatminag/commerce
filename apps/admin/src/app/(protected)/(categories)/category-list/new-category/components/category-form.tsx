"use client";

import { Label } from "@collex/ui/components/inputs/label";
import { Input } from "@collex/ui/components/inputs/input";

import { UploadImageIcon } from "@components/icons/image-upload-icon";
import { TextEditor } from "@components/editor/text-editor";

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
              <UploadImageIcon className="text-brand-600 mx-auto" />
            </div>
            <p className="mt-3 text-sm font-medium text-neutral-800">
              Banner Image
            </p>
            <p className="mt-3 text-xs text-neutral-600">
              Drop files here or{" "}
              <span className="text-brand-600 font-medium">Browse</span>
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
              <UploadImageIcon className="text-brand-600 mx-auto" />
            </div>
            <p className="mt-3 text-sm font-medium text-neutral-800">
              Thumbnail Image
            </p>
            <p className="mt-3 text-xs text-neutral-600">
              Drop files here or{" "}
              <span className="text-brand-600 font-medium">Browse</span>
            </p>
          </label>
        </div>
      </div>
      <form className="mt-6 space-y-4">
        <Input label="Category name" placeholder="Enter category name" />

        <Label className="block">Description</Label>
        <TextEditor />
      </form>
    </>
  );
};

export default CategoryForm;

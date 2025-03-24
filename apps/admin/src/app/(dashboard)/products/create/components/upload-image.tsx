import { PlusIcon } from "@/src/components/icons/plus-icon";

const UploadImage = () => {
  return (
    <div className="w-full rounded-md bg-white shadow-sm">
      <p className="text-heading border-b border-gray-200 p-4 font-medium">
        Upload Image
      </p>
      <div className="space-y-4 p-4">
        <label
          htmlFor="af-submit-app-upload-images"
          className="border-primary-200 group block cursor-pointer rounded-lg border-2 border-dashed p-4 text-center lg:p-7"
        >
          <input
            id="af-submit-app-upload-images"
            name="af-submit-app-upload-images"
            type="file"
            className="sr-only"
          />
          <div className="border-primary-200 mx-auto flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-dashed">
            <div className="bg-brand-600-200 flex h-10 w-10 items-center justify-center rounded-full">
              <PlusIcon className="text-brand-600-100 h-5 w-5" />
            </div>
          </div>
          <span className="mt-2 block text-base text-neutral-800">
            Browse your device or{" "}
            <span className="text-brand-600">drag&apos;n drop&apos;</span>
          </span>
          <span className="mt-1 block text-sm text-gray-500">
            Maximum file size is 2 MB
          </span>
        </label>
        <p className="text-base text-neutral-500">
          Add up to 8 images to your product.
        </p>
      </div>
    </div>
  );
};

export default UploadImage;

import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card";

import { UploadImageIcon } from "@/src/components/icons/image-upload-icon";

const ProductImages = () => {
  return (
    <Card className="col-span-1 row-span-1">
      <CardHeader className="gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          Product Images
        </CardTitle>
      </CardHeader>
      <div className="grid grid-cols-4 gap-3 px-6">
        <label
          htmlFor="upload-banner"
          className="bg-upload border-border-200 group col-span-4 flex h-48 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed text-center"
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
            Product Image
          </p>
          <p className="mt-3 text-xs text-neutral-600">
            Drop files here or{" "}
            <span className="text-brand-600 font-medium">Browse</span>
          </p>
        </label>
        <label
          htmlFor="upload-banner"
          className="bg-upload border-border-200 group col-span-1 flex h-16 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed text-center"
        >
          <input
            id="upload-banner"
            name="upload-banner"
            type="file"
            className="sr-only"
          />
          <div className="bg-upload-100 flex size-10 items-center justify-center rounded-full">
            <UploadImageIcon className="text-brand-600 mx-auto" />
          </div>
        </label>
        <label
          htmlFor="upload-banner"
          className="bg-upload border-border-200 group col-span-1 flex h-16 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed text-center"
        >
          <input
            id="upload-banner"
            name="upload-banner"
            type="file"
            className="sr-only"
          />
          <div className="bg-upload-100 flex size-10 items-center justify-center rounded-full">
            <UploadImageIcon className="text-brand-600 mx-auto" />
          </div>
        </label>
        <label
          htmlFor="upload-banner"
          className="bg-upload border-border-200 group col-span-1 flex h-16 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed text-center"
        >
          <input
            id="upload-banner"
            name="upload-banner"
            type="file"
            className="sr-only"
          />
          <div className="bg-upload-100 flex size-10 items-center justify-center rounded-full">
            <UploadImageIcon className="text-brand-600 mx-auto" />
          </div>
        </label>
        <label
          htmlFor="upload-banner"
          className="bg-upload border-border-200 group col-span-1 flex h-16 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed text-center"
        >
          <input
            id="upload-banner"
            name="upload-banner"
            type="file"
            className="sr-only"
          />
          <div className="bg-upload-100 flex size-10 items-center justify-center rounded-full">
            <UploadImageIcon className="text-brand-600 mx-auto" />
          </div>
        </label>
      </div>
    </Card>
  );
};

export default ProductImages;

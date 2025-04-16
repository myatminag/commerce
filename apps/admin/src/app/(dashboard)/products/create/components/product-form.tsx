"use client";

import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@workspace/ui/components/button";

import DiscountInfo from "./discount-info";
import ProductImages from "./product-images";
import ProductInfo from "./product-info";
import ProductOptions from "./product-options";
import ProductVariants from "./product-variants";

const ProductForm = () => {
  const methods = useForm({});

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative grid grid-cols-3 grid-rows-2 gap-6"
      >
        <div className="border-border-300 col-span-2 row-span-2 max-h-fit overflow-y-scroll rounded-md border bg-white">
          <ProductInfo />
        </div>
        <div className="border-border-300 sticky top-0 col-span-1 row-span-1 rounded-md border bg-white">
          <ProductImages />
        </div>
        <div className="border-border-300 col-span-1 row-span-1 rounded-md border bg-white">
          <DiscountInfo />
        </div>
        <div className="border-border-300 col-span-2 row-span-2 max-h-fit rounded-md border bg-white">
          <ProductOptions />
        </div>
        <div className="border-border-300 col-span-3 row-span-2 max-h-fit rounded-md border bg-white">
          <ProductVariants />
        </div>
        <div className="col-span-3 flex w-full items-center justify-end gap-x-3">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProductForm;

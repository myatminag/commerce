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
        className="*:data-[slot=card]:border-border-300 relative grid grid-cols-3 grid-rows-2 gap-6 *:data-[slot=card]:rounded-lg"
      >
        <ProductInfo />
        <ProductImages />
        <DiscountInfo />
        <ProductOptions />
        <ProductVariants />
        <div className="col-span-3 flex w-full items-center justify-end gap-x-3">
          <Button type="button" size="lg" variant="outline">
            Cancel
          </Button>
          <Button size="lg" type="submit">
            Create
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProductForm;

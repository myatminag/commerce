"use client";

import { FormProvider, useForm } from "react-hook-form";

import ProductInfo from "./product-info";
import DiscountInfo from "./discount-info";
import ProductImages from "./product-images";
import ProductOptions from "./product-options";
import ProductVariants from "./product-variants";

const ProductForm = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className="relative grid grid-cols-3 grid-rows-2 gap-6">
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
      </form>
    </FormProvider>
  );
};

export default ProductForm;

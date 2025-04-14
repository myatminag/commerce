import type { Metadata } from "next";

import ProductForm from "./components/product-form";

export const metadata: Metadata = {
  title: "New Product",
};

const Page = () => {
  return (
    <section>
      <h2 className="mb-6 text-lg font-bold text-neutral-950">
        Create Product
      </h2>
      <ProductForm />
    </section>
  );
};

export default Page;

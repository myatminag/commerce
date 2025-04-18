import type { Metadata } from "next";
import { Suspense } from "react";

import ProductTable from "./components/product-table";

export const metadata: Metadata = {
  title: "Products",
};

const Page = () => {
  return (
    <Suspense>
      <ProductTable />
    </Suspense>
  );
};

export default Page;

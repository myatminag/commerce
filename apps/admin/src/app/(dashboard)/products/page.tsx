import type { Metadata } from "next";
import { Suspense } from "react";

import ProductTable from "./components/product-table";

export const metadata: Metadata = {
  title: "Products",
};

const Page = () => {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-4 lg:flex">
      <Suspense>
        <ProductTable />
      </Suspense>
    </div>
  );
};

export default Page;

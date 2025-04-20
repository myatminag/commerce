import type { Metadata } from "next";

import ProductTable from "./components/product-table";

export const metadata: Metadata = {
  title: "Products",
};

const Page = () => {
  return <ProductTable />;
};

export default Page;

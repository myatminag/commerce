import type { Metadata } from "next";
import { Suspense } from "react";

import BrandTable from "./components/brand-table";

export const metadata: Metadata = {
  title: "Brands",
};

const Page = () => {
  return (
    <Suspense>
      <BrandTable />
    </Suspense>
  );
};

export default Page;

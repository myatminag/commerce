import type { Metadata } from "next";
import { Suspense } from "react";

import BrandTable from "./components/brand-table";

export const metadata: Metadata = {
  title: "Brands",
};

const Page = () => {
  return (
    <section className="pt-6 lg:px-6">
      <Suspense>
        <BrandTable />
      </Suspense>
    </section>
  );
};

export default Page;

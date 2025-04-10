import type { Metadata } from "next";

import CategoryTable from "./components/category-table";

export const metadata: Metadata = {
  title: "Categories",
};

const Page = () => {
  return <CategoryTable />;
};

export default Page;

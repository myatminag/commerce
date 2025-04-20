import type { Metadata } from "next";

import OrderTable from "./components/order-table";

export const metadata: Metadata = {
  title: "Orders",
};

const Page = () => {
  return <OrderTable />;
};

export default Page;

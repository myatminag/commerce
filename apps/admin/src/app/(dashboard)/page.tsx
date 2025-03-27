import { Filter } from "./components/filter";
import { LatestOrders } from "./components/latest-orders";
import { NewArrival } from "./components/new-arrival";
import { SalesReport } from "./components/sales-report";
import { Statistics } from "./components/statistics";
import { TopSellingCategories } from "./components/top-selling-categories";
import { TopSellingProducts } from "./components/top-selling-products";

const Page = () => {
  return (
    <section className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h3 className="text-2md font-semibold text-neutral-950">
            Dashboard Insights
          </h3>
          <p className="text-sm text-[#44504D]">
            Stay ahead with a real-time view of all actions and activities.
          </p>
        </div>
        <Filter />
      </div>
      <Statistics />
      <div className="grid grid-cols-4 gap-4">
        <SalesReport />
        <TopSellingCategories />
        <NewArrival />
        <TopSellingProducts />
        <LatestOrders />
      </div>
    </section>
  );
};

export default Page;

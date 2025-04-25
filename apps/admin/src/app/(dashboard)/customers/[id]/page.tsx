import ActionButton from "./components/action-button";
import AddressInfo from "./components/address-info";
import CustomerInfo from "./components/customer-info";
import OrderHistory from "./components/order-history";

const Page = () => {
  return (
    <section className="space-y-6">
      <ActionButton />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="col-span-1 space-y-4 lg:col-span-2">
          <OrderHistory />
        </div>
        <div className="sticky top-0 space-y-4 self-start">
          <CustomerInfo />
          <AddressInfo />
        </div>
      </div>
    </section>
  );
};

export default Page;

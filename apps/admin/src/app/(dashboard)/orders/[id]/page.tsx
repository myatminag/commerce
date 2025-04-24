import OrderNote from "./components/order-note";
import ProductList from "./components/product-list";
import ActionButton from "./components/action-button";
import CustomerInfo from "./components/customer-info";
import PaymentSummary from "./components/payment-summary";
import OrderTracking from "./components/order-tracking";
import PaymentInformation from "./components/payment-information";

const Page = () => {
  return (
    <section className="space-y-6">
      <ActionButton />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="col-span-1 space-y-4 lg:col-span-2">
          <ProductList />
          <PaymentInformation />
          <PaymentSummary />
          <OrderNote />
        </div>
        <div className="sticky top-0 space-y-4 self-start">
          <OrderTracking />
          <CustomerInfo />
        </div>
      </div>
    </section>
  );
};

export default Page;

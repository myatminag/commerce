import ProductList from "./components/product-list";
import ActionButton from "./components/action-button";
import CustomerInfo from "./components/customer-info";
import PaymentSummary from "./components/payment-summary";
import DeliverySerivce from "./components/delivery-service";
import PaymentInformation from "./components/payment-information";

const Page = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-heading font-semibold">Order ID: AJ1295DWMG90</h2>
        <p className="text-base text-neutral-700">
          Order placed on: 17 Aug, 2023, 5:48 am
        </p>
      </div>˜
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="col-span-1 space-y-4 lg:col-span-2">
          <ProductList />
          <PaymentInformation />
          <PaymentSummary />
          <div className="hidden lg:block">
            <ActionButton />
          </div>
        </div>
        <div className="sticky top-0 space-y-4 self-start">
          <CustomerInfo />
          <DeliverySerivce />
          <div className="block lg:hidden">
            <ActionButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

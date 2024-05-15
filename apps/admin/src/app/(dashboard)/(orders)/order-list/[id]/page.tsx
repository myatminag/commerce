import { Metadata } from 'next';

import ProductList from './components/product-list';
import CustomerInfo from './components/customer-info';
import PaymentRecord from './components/payment-record';
import PaymentSummary from './components/payment-summary';
import ActionButton from './components/action-button';
import DeliverySerivce from './components/delivery-service';
import ShipmentDetail from './components/shipment-detail';

export const metadata: Metadata = {
  title: 'Product List',
};

const Page = () => {
  return (
    <div className="space-y-4 p-6">
      <div className="space-y-1">
        <h2 className="text-heading font-semibold">Order ID: #7583100</h2>
        <p className="text-base text-neutral-500">
          Order placed on: 17 Aug, 2023, 5:48 am
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="col-span-1 space-y-4 lg:col-span-2">
          <ProductList />
          <PaymentRecord />
          <PaymentSummary />
          <div className="hidden lg:block">
            <ActionButton />
          </div>
        </div>
        <div className="col-span-1">
          <div className="space-y-4 lg:sticky lg:top-24">
            <CustomerInfo />
            <ShipmentDetail />
            <DeliverySerivce />
            <div className="block lg:hidden">
              <ActionButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

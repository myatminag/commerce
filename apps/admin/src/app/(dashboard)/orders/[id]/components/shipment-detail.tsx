import { DeliveringIcon } from "@workspace/ui/icons/delivering-icon";
import { DeliveredIcon } from "@workspace/ui/icons/delivered-icon";

import { OrderIcon } from "@components/icons/order-icon";

const ShipmentDetail = () => {
  return (
    <div className="w-full rounded-md bg-white shadow-sm">
      <p className="text-heading border-b border-gray-200 p-4 font-medium text-neutral-700">
        Shipment Detail
      </p>
      <div className="grid w-full grid-cols-1 gap-4 px-8 py-4">
        <div className="before:bg-brand-600-100 relative flex items-start gap-x-4 before:absolute before:bottom-0 before:left-5 before:top-[2.5rem] before:h-[calc(45px)] before:w-[2px] lg:gap-x-6">
          <div className="bg-brand-600-100 dark:bg-brand-600-200 grid min-h-[44px] min-w-[44px] place-content-center rounded-full">
            <OrderIcon className="size-5 text-white" />
          </div>
          <div className="mb-5 w-full">
            <p className="text-base text-neutral-800">Ordered</p>
            <time className="font-mono text-sm text-neutral-800">
              21 Feb 2024, 8:43 pm
            </time>
          </div>
        </div>
        <div className="before:bg-brand-600-100 relative flex items-start gap-x-4 before:absolute before:bottom-0 before:left-5 before:top-[2.5rem] before:h-[calc(45px)] before:w-[2px] lg:gap-x-6">
          <div className="bg-brand-600-100 dark:bg-brand-600-200 grid min-h-[44px] min-w-[44px] place-content-center rounded-full">
            <DeliveringIcon className="size-5 text-white" />
          </div>
          <div className="mb-5 w-full">
            <p className="text-base text-neutral-800">Delivering</p>
            <time className="font-mono text-sm text-neutral-800">
              21 Feb 2024, 8:43 pm
            </time>
          </div>
        </div>
        <div className="relative flex items-start gap-x-4 lg:gap-x-6">
          <div className="bg-brand-600-100 grid min-h-[44px] min-w-[44px] place-content-center rounded-full">
            <DeliveredIcon className="text-white" />
          </div>
          <div className="w-full">
            <p className="text-base text-neutral-800">Delivered</p>
            <time className="font-mono text-sm text-neutral-800">
              21 Feb 2024, 8:43 pm
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetail;

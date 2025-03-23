const PaymentSummary = () => {
  return (
    <div className="w-full rounded-md bg-white shadow-sm">
      <p className="text-heading border-b border-gray-200 p-4 font-medium">
        Payment Summary
      </p>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-800">Est Delivery Time:</p>
          <p className="text-base font-medium text-neutral-800">(1 - 2) Days</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-800">Subtotal:</p>
          <p className="text-base font-medium text-neutral-800">345,000 Ks</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-800">Delivery Fee:</p>
          <p className="text-base font-medium text-neutral-800">3,000 Ks</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-800">Est Tax:</p>
          <p className="text-base font-medium text-neutral-800">500 Ks</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-800">Discount:</p>
          <p className="text-base font-medium text-neutral-800">-</p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-800">Total:</p>
          <p className="text-brand-600-100 text-md font-medium">380,000 Ks</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;

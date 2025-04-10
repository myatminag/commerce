import { BrandForm } from "../create/components/brand-form";
import { ActionButton } from "../create/components/action-button";

const Update = () => {
  return (
    <section>
      <div className="relative flex items-center justify-between">
        <h2 className="text-lg font-bold text-neutral-950">Update Brand</h2>
        <ActionButton />
      </div>
      <div className="mt-4 grid grid-cols-3">
        <div className="border-border-300 col-span-2 rounded-md border bg-white p-6">
          <p className="text-base font-semibold uppercase text-neutral-700">
            Brand Info
          </p>
          <BrandForm />
        </div>
      </div>
    </section>
  );
};

export default Update;

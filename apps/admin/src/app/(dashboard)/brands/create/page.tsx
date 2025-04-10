import { ActionButton } from "./components/action-button";
import { BrandForm } from "./components/brand-form";

const Create = () => {
  return (
    <section>
      <div className="relative flex items-center justify-between">
        <h2 className="text-lg font-bold text-neutral-950">Create Brand</h2>
        <ActionButton />
      </div>
      <div className="mt-6 grid grid-cols-3">
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

export default Create;

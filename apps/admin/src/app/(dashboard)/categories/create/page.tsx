import ActionButton from "./components/action-button";
import CategoryForm from "./components/category-form";
import SubCategoryList from "./components/sub-category-list";
import SubCategoryForm from "./components/subcategory-form";

const Page = () => {
  return (
    <section>
      <div className="relative flex items-center justify-between">
        <h2 className="text-lg font-bold text-neutral-950">Create Category</h2>
        <ActionButton />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-6 overflow-hidden">
        <div className="border-border-300 col-span-2 rounded-md border bg-white p-6">
          <p className="text-base font-semibold uppercase text-neutral-700">
            Category Info
          </p>
          <CategoryForm />
        </div>
        <div className="border-border-300 col-span-1 rounded-md border bg-white p-6">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-base font-semibold uppercase text-neutral-700">
              Sub Categories
            </p>
            <SubCategoryForm />
          </div>
          <SubCategoryList />
        </div>
      </div>
    </section>
  );
};

export default Page;

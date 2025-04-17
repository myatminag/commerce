import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

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
        <Card className="col-span-2 gap-y-0">
          <CardHeader className="gap-0 border-b">
            <CardTitle className="text-base font-semibold uppercase text-neutral-700">
              Category Info
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CategoryForm />
          </CardContent>
        </Card>
        <Card className="col-span-1 gap-y-0">
          <CardHeader className="flex items-center justify-between border-b">
            <CardTitle className="text-base font-semibold uppercase text-neutral-700">
              Sub Categories
            </CardTitle>
            <SubCategoryForm />
          </CardHeader>
          <CardContent>
            <SubCategoryList />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Page;

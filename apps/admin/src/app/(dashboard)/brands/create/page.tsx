import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

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
        <Card className="col-span-2 gap-y-0">
          <CardHeader className="gap-0 border-b">
            <CardTitle className="text-base font-semibold uppercase text-neutral-700">
              Brand Info
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BrandForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Create;

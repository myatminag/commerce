import { useState, KeyboardEventHandler } from "react";
import { PlusIcon } from "lucide-react";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Label } from "@workspace/ui/components/label";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card";

const components = {
  DropdownIndicator: null,
};

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label,
});

const ProductOptions = () => {
  const { control, register, getValues, setValue, handleSubmit, reset } =
    useFormContext();

  const [inputValue, setInputValue] = useState("");

  const [options] = getValues(["options"]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
      case ",":
        {
          event.preventDefault();

          const newOption = createOption(inputValue);
          const currentValue = options || [];

          if (
            !currentValue.some((opt: Option) => opt.value === newOption.value)
          ) {
            const updatedValue = [...currentValue, newOption];
            setValue("options", updatedValue, { shouldValidate: true });
          }
          setInputValue("");
        }
        break;
    }
  };

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("data", data);
  };

  return (
    <Card className="col-span-2 row-span-2 max-h-fit">
      <CardHeader className="flex items-center justify-between gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          Product Options
        </CardTitle>
        <Dialog>
          <DialogTrigger
            type="button"
            className="bg-upload-100 text-brand-600 flex cursor-pointer items-center justify-center rounded-full px-3 py-2 text-sm"
          >
            <PlusIcon size="16" className="text-brand-600" />
            Add options
          </DialogTrigger>
          <DialogContent
            onClick={(e) => e.stopPropagation()}
            onMouseLeave={(e) => e.stopPropagation()}
            className="bg-white sm:max-w-lg"
          >
            <DialogHeader className="mb-5">
              <DialogTitle>Add Product Option</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="col-span-2 space-y-2">
                <Label className="block">Option Name</Label>
                <Input
                  placeholder="Enter option name"
                  {...register("optionName")}
                />
              </div>
              <div>
                <Label className="mb-2 block">Options</Label>
                <Controller
                  name="options"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <CreatableSelect
                      isClearable
                      isMulti
                      value={value}
                      menuIsOpen={false}
                      onChange={onChange}
                      components={components}
                      inputValue={inputValue}
                      onInputChange={(newValue) => setInputValue(newValue)}
                      onKeyDown={handleKeyDown}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      placeholder="Enter option eg. Small, Medium, Large"
                    />
                  )}
                />
                <small className="text-gray-400">
                  Press &quot;Enter&quot; or add a &quot;Comma&quot; for each
                  option
                </small>
              </div>
              <div className="flex items-center justify-end gap-x-3">
                <DialogClose asChild>
                  <Button type="button" variant="outline" onClick={reset}>
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Add</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <div className="flex items-start gap-x-6 px-6">
        <p>Color</p>
        <p>Gray Green Blue</p>
      </div>
    </Card>
  );
};

export default ProductOptions;

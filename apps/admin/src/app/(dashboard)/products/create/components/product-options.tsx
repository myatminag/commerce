import { Fragment, useState, KeyboardEventHandler } from "react";
import { PlusIcon } from "lucide-react";
import CreatableSelect from "react-select/creatable";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Button } from "@workspace/ui/components/button";
import { Label } from "@workspace/ui/components/inputs/label";
import { Input } from "@workspace/ui/components/input";

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
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState<readonly Option[]>([]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
      case ",":
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue("");
        event.preventDefault();
    }
  };

  return (
    <Fragment>
      <div className="flex items-center justify-between border-b p-6">
        <p className="text-base font-semibold uppercase text-neutral-700">
          Product Options
        </p>
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
            <div className="space-y-5">
              <div className="col-span-2 space-y-2">
                <Label className="block">Option Name</Label>
                <Input placeholder="Enter option name" />
              </div>
              <div>
                <Label className="mb-2 block">Options</Label>
                <CreatableSelect
                  className="react-select-container"
                  classNamePrefix="react-select"
                  components={components}
                  inputValue={inputValue}
                  isClearable
                  isMulti
                  menuIsOpen={false}
                  onChange={(newValue) => setValue(newValue)}
                  onInputChange={(newValue) => setInputValue(newValue)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter option eg. Small, Medium, Large"
                  value={value}
                />
                <small className="text-gray-400">
                  Press &quot;Enter&quot; or add a &quot;Comma&quot; for each
                  option
                </small>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-end gap-x-3">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Add</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex items-start gap-x-6 p-6">
        <p>Color</p>
        <p>Gray Green Blue</p>
      </div>
    </Fragment>
  );
};

export default ProductOptions;

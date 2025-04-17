"use client";

import { KeyboardEventHandler, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { LoaderCircleIcon } from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Label } from "@workspace/ui/components/label";

import { PlusIcon } from "@/src/components/icons/plus-icon";

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

export const SubCategoryForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState<readonly Option[]>([]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue("");
        event.preventDefault();
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        type="button"
        className="bg-upload-100 flex size-6 cursor-pointer items-center justify-center rounded-full"
      >
        <PlusIcon className="text-brand-600 size-3" />
      </DialogTrigger>
      <DialogContent
        onClick={(e) => e.stopPropagation()}
        onMouseLeave={(e) => e.stopPropagation()}
        className="bg-white sm:max-w-md"
      >
        <DialogHeader className="mb-5">
          <DialogTitle>Create Sub Category</DialogTitle>
        </DialogHeader>
        <form className="space-y-5">
          <div>
            <Label className="mb-2 block">Sub Category</Label>
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
              placeholder="Enter sub category"
              value={value}
            />
            <small className="text-gray-400">
              Press &quot;Enter&quot; to create multiple sub categories.
            </small>
          </div>
        </form>
        <div className="mt-5 flex items-center justify-end gap-x-3">
          <DialogClose asChild>
            <Button type="button" variant="outline" className="w-[100px]">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" className="w-[100px]">
            <LoaderCircleIcon
              className="-ms-1 animate-spin"
              size={16}
              aria-hidden="true"
            />
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubCategoryForm;

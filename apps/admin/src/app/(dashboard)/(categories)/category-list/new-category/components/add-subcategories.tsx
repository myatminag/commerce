'use client';

import type { KeyboardEventHandler } from 'react';
import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@repo/ui/components/dialog/dialog';
import { Button } from '@repo/ui/components/button';
import { Label } from '@repo/ui/components/inputs/label';

import { PlusIcon } from '@components/icons/plus-icon';
import { SubCategoryUploadIcon } from '@components/icons/subcategory-upload-icon';
import { Input } from '@repo/ui/components/inputs/input';

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

interface CreateSubCategoryProps {
  hasSubCategory: boolean;
}

export const SubCategoryForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<readonly Option[]>([]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue('');
        event.preventDefault();
    }
  };

  return (
    <DialogContent
      onClick={(e) => e.stopPropagation()}
      onMouseLeave={(e) => e.stopPropagation()}
      className="max-w-md"
    >
      <DialogHeader className="h-14 rounded-t-xl border-b bg-[linear-gradient(90deg,_#EFFEF9_0%,_#C7F5E6_100%)]">
        <DialogTitle>Create Sub Category</DialogTitle>
      </DialogHeader>
      <form className="mb-16 space-y-5 px-4">
        <Input
          placeholder="Enter sub category name"
          label="Sub Category name"
        />

        <div>
          <Label className="mb-2 block">Category type</Label>
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
            placeholder="Enter category type"
            value={value}
          />
          <small className="text-gray-400">
            Press &quot;Enter&quot; to create multiple sub categories.
          </small>
        </div>
      </form>
      <div className="flex items-center justify-end gap-x-3 border-t px-4 py-4">
        <DialogClose asChild>
          <Button type="button" variant="outline" className="w-[100px]">
            Discard
          </Button>
        </DialogClose>
        <Button type="submit" className="w-[100px]">
          Save
        </Button>
      </div>
    </DialogContent>
  );
};

export const CreateSubCategory = ({
  hasSubCategory = false,
}: CreateSubCategoryProps) => {
  return (
    <Dialog>
      {hasSubCategory ? (
        <DialogTrigger
          type="button"
          className="bg-upload-100 flex size-10 items-center justify-center rounded-full"
        >
          <PlusIcon className="text-brand-600" />
        </DialogTrigger>
      ) : (
        <DialogTrigger
          type="button"
          className="mx-auto mt-8 flex flex-col items-center justify-center"
        >
          <div className="bg-upload-100 flex size-20 items-center justify-center rounded-full">
            <SubCategoryUploadIcon className="text-brand-600" />
          </div>
          <p className="mt-3 text-base font-semibold text-neutral-950">
            Create sub-categories
          </p>
        </DialogTrigger>
      )}
      <SubCategoryForm />
    </Dialog>
  );
};

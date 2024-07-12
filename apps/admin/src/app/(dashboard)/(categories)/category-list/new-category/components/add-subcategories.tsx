'use client';

import { useState } from 'react';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@repo/ui/components/dialog';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@repo/ui/components/command';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@repo/ui/components/popover';
import { Button } from '@repo/ui/components/button';
import { Label } from '@repo/ui/components/inputs/label';
import { ChevronIcon } from '@repo/ui/icons/chevron-icon';
import { Textarea } from '@repo/ui/components/inputs/text-area';

import { PlusIcon } from '@components/icons/plus-icon';
import { SubCategoryUploadIcon } from '@components/icons/subcategory-upload-icon';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

interface CreateSubCategoryProps {
  hasSubCategory: boolean;
}

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
          <PlusIcon className="text-primary" />
        </DialogTrigger>
      ) : (
        <DialogTrigger
          type="button"
          className="mx-auto mt-8 flex flex-col items-center justify-center"
        >
          <div className="bg-upload-100 flex size-20 items-center justify-center rounded-full">
            <SubCategoryUploadIcon className="text-primary" />
          </div>
          <p className="text-primary-900 mt-3 text-base font-medium">
            Create sub-categories
          </p>
        </DialogTrigger>
      )}
      <SubCategoryForm />
    </Dialog>
  );
};

const SubCategoryForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <DialogContent className="max-w-md bg-white lg:rounded-xl">
      <DialogHeader className="h-14 rounded-t-xl border-b bg-[linear-gradient(90deg,_#EFFEF9_0%,_#C7F5E6_100%)]">
        <DialogTitle>Create Sub Category</DialogTitle>
      </DialogHeader>
      <form className="mb-10 space-y-3 px-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <>
              <Label htmlFor="sub-category" className="mb-2 block">
                Sub category name
              </Label>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                Enter sub category...
                <ChevronIcon className="ml-2 shrink-0 opacity-50" />
              </Button>
            </>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search sub category..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    }}
                  >
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <Textarea label="Description" placeholder="Enter description here" />
      </form>
      <div className="flex items-center justify-end gap-x-3 border-t px-4 py-4">
        <DialogClose asChild>
          <Button
            type="button"
            variant="outline"
            className="text-primary border-primary bg-primary-50 w-[100px] text-base"
          >
            Discard
          </Button>
        </DialogClose>
        <Button type="submit" className="w-[100px] text-base">
          Save
        </Button>
      </div>
    </DialogContent>
  );
};

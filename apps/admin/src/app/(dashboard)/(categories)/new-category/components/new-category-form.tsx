'use client';

import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@repo/ui/components/dialog';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/inputs/input';
import { Label } from '@repo/ui/components/inputs/label';
import { Textarea } from '@repo/ui/components/inputs/text-area';
import { Checkbox } from '@repo/ui/components/inputs/checkbox';

import { CameraIcon } from '@components/icons/camera-icon';
import { CircleIcon } from '@components/icons/circle-icon';

const NewCategoryForm = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <div className="w-full rounded-md border bg-white shadow-sm">
          <p className="text-heading border-b border-gray-200 p-4 font-medium text-neutral-800">
            Sub Categories
          </p>
          <div className="relative flex h-52 flex-col items-center justify-center gap-y-4 p-6">
            <p className="text-md text-neutral-500">
              Start adding sub categories in your category
            </p>
            <Dialog>
              <DialogTrigger>
                <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-gray-400">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9f5ff]">
                    <CircleIcon className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="border-b">
                  <DialogTitle>Add new sub category</DialogTitle>
                </DialogHeader>
                <form className="space-y-3 px-6 py-3">
                  <div className="relative z-30 m-1 mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-solid border-white bg-[#e9f5ff]">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                      <CameraIcon className="h-10 w-10 text-gray-400" />
                    </div>
                  </div>

                  <Input
                    label="Sub category name"
                    placeholder="Enter sub category name"
                  />

                  <Textarea
                    label="Description"
                    placeholder="Enter description here"
                    rows={5}
                  />
                </form>
                <div className="flex items-center gap-x-3 px-6 pb-6">
                  <DialogClose asChild>
                    <Button type="button" variant="outline" className="w-full">
                      Close
                    </Button>
                  </DialogClose>
                  <Button className="w-full">Add</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="w-full rounded-md border bg-white shadow-sm">
          <p className="text-heading border-b border-gray-200 p-4 font-medium text-neutral-800">
            Associated Brands
          </p>
          <div className="relative flex h-52 flex-col items-center justify-center gap-y-4 p-6">
            <p className="text-md text-neutral-500">
              Start adding associated brands in your category
            </p>
            <Dialog>
              <DialogTrigger>
                <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-gray-400">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9f5ff]">
                    <CircleIcon className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="border-b">
                  <DialogTitle>Select associated brands</DialogTitle>
                </DialogHeader>
                <ul className="h-80 space-y-4 overflow-x-hidden overflow-y-scroll px-6">
                  {[...Array(10)].map((i) => (
                    <li
                      key={i}
                      className="flex items-center justify-start gap-4 px-2"
                    >
                      <Checkbox aria-label="Select row" />
                      <Image
                        width={40}
                        height={40}
                        alt="Image Description"
                        className="size-[44px] rounded-md"
                        src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                      />
                      <h3 className="text-md">Mobile Accessories</h3>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-x-3 px-6 pb-6">
                  <DialogClose asChild>
                    <Button type="button" variant="outline" className="w-full">
                      Close
                    </Button>
                  </DialogClose>
                  <Button className="w-full">Select</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="w-full rounded-md border bg-white shadow-sm">
          <p className="text-heading border-b border-gray-200 p-4 font-medium text-neutral-800">
            Category Info
          </p>
          <form className="m-4 space-y-3">
            <div className="relative space-y-1">
              <Label>Category Image</Label>
              <label
                htmlFor="af-submit-app-upload-images"
                className="group block cursor-pointer rounded-md border-2 border-dashed border-gray-200 bg-[#e9f5ff] p-3 text-center lg:p-9"
              >
                <input
                  id="af-submit-app-upload-images"
                  name="af-submit-app-upload-images"
                  type="file"
                  className="sr-only"
                />
                <CameraIcon className="mx-auto size-10 text-gray-400" />
                <span className="mt-2 block text-base text-neutral-600">
                  Add category cover photo
                </span>
              </label>
              <div className="relative">
                <div className="relative z-30 m-1 mx-auto -mt-8 h-24 w-24 overflow-hidden rounded-full border-4 border-solid border-white bg-[#e9f5ff]">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <CameraIcon className="h-10 w-10 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            <Input label="Category name" placeholder="Enter category name" />

            <Textarea
              label="Description"
              placeholder="Enter description here"
              rows={5}
            />

            <div className="flex items-center gap-x-3">
              <Button type="button" variant="outline" className="w-full">
                Close
              </Button>
              <Button className="w-full">Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCategoryForm;

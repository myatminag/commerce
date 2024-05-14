import Image from 'next/image';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@repo/ui/components/dialog';
import { Button } from '@repo/ui/components/button';
import { Label } from '@repo/ui/components/inputs/label';
import { Checkbox } from '@repo/ui/components/inputs/checkbox';

import { CircleIcon } from '@components/icons/circle-icon';

const AssociatedBrands = () => {
  return (
    <>
      <Label className="block">Associated brands</Label>
      <Dialog>
        <DialogTrigger>
          <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-gray-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAE9EA]">
              <CircleIcon className="text-primary-100 h-5 w-5" />
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
            <Button className="bg-primary-100 w-full">Select</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AssociatedBrands;

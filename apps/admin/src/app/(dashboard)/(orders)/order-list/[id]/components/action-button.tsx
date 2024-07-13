'use client';

import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@repo/ui/components/dialog/dialog';

import { Button } from '@repo/ui/components/button';
import { TrashIcon } from '@repo/ui/icons/trash-icon';

const ActionButton = () => {
  return (
    <div className="flex items-center gap-x-4">
      <Dialog>
        <DialogTrigger>
          <Button size="icon" className="rounded-md bg-[#FAE9EA] p-2">
            <TrashIcon className="text-primary-100 size-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader className="text-heading border-b font-medium text-neutral-800">
            <DialogTitle>Delete Order</DialogTitle>
          </DialogHeader>
          <p className="px-6 text-center text-base text-neutral-800">
            Are you sure you want to delete this order? This action can not be
            undone.
          </p>
          <div className="flex items-center gap-x-3 px-4 pb-4">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="text-primary-100 bg-primary-200 w-full"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button className="bg-primary-100 w-full">Delete</Button>
          </div>
        </DialogContent>
      </Dialog>
      <Button className="bg-primary-100 flex-1 rounded-md p-2 text-base text-white">
        Confirm
      </Button>
    </div>
  );
};

export default ActionButton;

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@repo/ui/components/dialog';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/inputs/input';
import { Label } from '@repo/ui/components/inputs/label';
import { Textarea } from '@repo/ui/components/inputs/text-area';

import { CircleIcon } from '@components/icons/circle-icon';
import { CameraIcon } from '@components/icons/camera-icon';

const SubCategories = () => {
  return (
    <>
      <Label className="block">Sub categories</Label>
      <Dialog>
        <DialogTrigger>
          <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-gray-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAE9EA]">
              <CircleIcon className="text-primary-100 h-5 w-5" />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader className="border-b">
            <DialogTitle>Add new sub category</DialogTitle>
          </DialogHeader>
          <form className="space-y-3 px-4">
            <div className="relative z-30 m-1 mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-solid border-white bg-[#FAE9EA]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <CameraIcon className="text-primary-100 h-10 w-10" />
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
          <div className="flex items-center gap-x-3 px-4 pb-4">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="text-primary-100 w-full bg-[#FAE9EA]"
              >
                Close
              </Button>
            </DialogClose>
            <Button className="bg-primary-100 w-full">Add</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubCategories;

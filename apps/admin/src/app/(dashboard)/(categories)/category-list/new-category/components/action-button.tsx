'use client';

import { Button } from '@repo/ui/components/button';

const ActionButton = () => {
  return (
    <div className="flex items-center gap-x-3">
      <Button className="text-brand-600-950 w-[100px] bg-white">Discard</Button>
      <Button className="w-[100px]">Save</Button>
    </div>
  );
};

export default ActionButton;

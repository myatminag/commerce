import { Row } from '@tanstack/react-table';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/dropdown.menu';
import { Button } from '@repo/ui/components/button';

import { ThreeDotsIcon } from '@components/icons/three-dots-icon';

const Actions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="data-[state=open]:bg-muted flex h-7 w-7 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <ThreeDotsIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem className="text-success focus:text-success">
          Publish
        </DropdownMenuItem>
        <DropdownMenuItem className="text-primary-100 focus:text-primary-100">
          Draft
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-primary-100 focus:text-primary-100">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;

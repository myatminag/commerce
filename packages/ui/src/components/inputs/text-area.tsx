import * as React from 'react';

import { cn } from '../../libs/utils';
import { Label } from './label';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errors?: string | undefined;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className, id, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <Label htmlFor={id}>{label}</Label>
        <textarea
          className={cn(
            'border-secondary-300 bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-primary flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };

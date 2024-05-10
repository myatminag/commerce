import { forwardRef, InputHTMLAttributes } from 'react';

import { Label } from './label';
import { cn } from '../../libs/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, type, id, errors, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <Label htmlFor={id}>{label}</Label>
        <input
          id={id}
          type={type}
          className={cn(
            'border-secondary-300 placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {Boolean(errors) && (
          <span className="text-sm text-red-500">{errors}</span>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };

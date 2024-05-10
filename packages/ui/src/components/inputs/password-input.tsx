import { forwardRef, InputHTMLAttributes, useState } from 'react';

import { Label } from './label';
import { cn } from '../../libs/utils';
import { VisibleIcon, InvisibleIcon } from '../../icons/auth-icons';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: string | undefined;
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, id, errors, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>();

    return (
      <div className="space-y-1">
        <Label htmlFor={id}>{label}</Label>
        <div className="relative">
          <input
            id={id}
            type={isVisible ? 'text' : 'password'}
            className={cn(
              'border-secondary-300 placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            ref={ref}
            {...props}
          />
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="absolute end-0 top-0 p-2.5 focus:outline-none disabled:pointer-events-none"
          >
            {isVisible ? (
              <VisibleIcon className="text-secondary-500 size-4 flex-shrink-0" />
            ) : (
              <InvisibleIcon className="text-secondary-500 size-4 flex-shrink-0" />
            )}
          </button>
        </div>
        {Boolean(errors) && (
          <span className="text-sm text-red-500">{errors}</span>
        )}
      </div>
    );
  },
);
PasswordInput.displayName = 'Input';

export { PasswordInput };

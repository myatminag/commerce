import { forwardRef, InputHTMLAttributes } from "react";

import { Label } from "./label";
import { cn } from "../../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, type, id, errors, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        <Label htmlFor={id}>{label}</Label>
        <input
          id={id}
          type={type}
          className={cn(
            "border-border-100 placeholder:text-placeholder focus-visible:ring-brand-600 rounded-base flex h-10 w-full border bg-transparent px-3 py-1 text-base text-neutral-950 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sm focus:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
Input.displayName = "Input";

export { Input };

import type { SVGProps } from 'react';

import { cn } from '../libs/utils';

export const ChevronIcon = ({
  direction,
  className,
  ...rest
}: SVGProps<SVGSVGElement> & {
  direction?: 'left' | 'right' | 'up' | 'down';
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      {...rest}
      className={cn('md:cursor-pointer', className, {
        'rotate-180': direction === 'up',
        '-rotate-90': direction === 'right',
        'rotate-90': direction === 'left',
      })}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.648 13.481a.917.917 0 01-1.296 0L5.768 8.898a.917.917 0 011.297-1.296L11 11.537l3.935-3.935a.917.917 0 111.296 1.296l-4.583 4.583z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const AccordionChevronIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <rect width="16" height="16" fill="#04A88C" rx="0.889"></rect>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8.542 10.468a.677.677 0 01-.958 0L4.198 7.082a.677.677 0 11.958-.957l2.907 2.907 2.907-2.907a.677.677 0 11.958.957l-3.386 3.386z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

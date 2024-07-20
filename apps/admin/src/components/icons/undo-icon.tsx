import type { SVGProps } from 'react';

export const UndoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#191C1F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.481 9.347h-4.5v-4.5"
      />
      <path
        stroke="#191C1F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.169 17.831a8.25 8.25 0 100-11.662L2.98 9.347"
      />
    </svg>
  );
};

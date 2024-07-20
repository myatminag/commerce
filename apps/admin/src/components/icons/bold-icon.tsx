import type { SVGProps } from 'react';

export const BoldIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6 11.25h8.25a3.75 3.75 0 010 7.5H6V4.5h7.125a3.375 3.375 0 010 6.75"
      />
    </svg>
  );
};

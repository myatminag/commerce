import type { SVGProps } from 'react';

export const StrikeThroughIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.75 12h16.5M7.153 9a2.372 2.372 0 01-.112-.75C7.04 6.178 9.103 4.5 12 4.5c2.23 0 3.965.994 4.64 2.39M6.75 15.75c0 2.072 2.353 3.75 5.25 3.75s5.25-1.678 5.25-3.75c0-2.231-2.025-3.094-4.275-3.75"
      />
    </svg>
  );
};

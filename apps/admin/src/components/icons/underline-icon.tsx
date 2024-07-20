import type { SVGProps } from 'react';

export const UnderlineIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.75 20.25h16.5M6 5.25v6a6 6 0 1012 0v-6"
      />
    </svg>
  );
};

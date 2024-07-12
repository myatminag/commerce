import type { SVGProps } from 'react';

export const CustomerIcon = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M8.25 15a4.875 4.875 0 100-9.75 4.875 4.875 0 000 9.75z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.569 5.428a5.11 5.11 0 011.322-.178 4.875 4.875 0 110 9.75M1.5 18.506a8.25 8.25 0 0113.5 0M15.89 15a8.241 8.241 0 016.75 3.506"
      />
    </svg>
  );
};

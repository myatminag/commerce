import type { SVGProps } from 'react';

export const ItalicIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.25 5.25l-4.5 13.5M6 18.75h7.5M10.5 5.25H18"
      />
    </svg>
  );
};

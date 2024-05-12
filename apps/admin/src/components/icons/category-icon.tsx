import { SVGProps } from 'react';

export const CategoryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_279_7854)"
      >
        <path d="M3 16.5l9 5.25 9-5.25"></path>
        <path d="M3 12l9 5.25L21 12"></path>
        <path d="M3 7.5l9 5.25 9-5.25-9-5.25L3 7.5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_279_7854">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

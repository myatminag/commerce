import { SVGProps } from 'react';

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <g fill="#04A88C" clipPath="url(#clip0_447_1573)">
        <path d="M10.008 15.731a7.632 7.632 0 110-15.263 7.632 7.632 0 010 15.263zm0-13.083a5.451 5.451 0 100 10.903 5.451 5.451 0 000-10.903z"></path>
        <path d="M1.286 17.912a1.09 1.09 0 01-.78-1.858l.006-.007 4.1-4.099a1.114 1.114 0 111.548 1.603l-4.1 4.044a1.09 1.09 0 01-.774.317z"></path>
      </g>
      <defs>
        <clipPath id="clip0_447_1573">
          <path
            fill="#fff"
            d="M0 0H17.45V17.45H0z"
            transform="translate(.19 .465)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

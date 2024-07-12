import type { SVGProps } from 'react';

export const BackArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="12"
      fill="none"
      viewBox="0 0 19 12"
      {...props}
    >
      <path
        fill="#000"
        d="M.434 5.434a.8.8 0 000 1.132l5.091 5.09a.8.8 0 001.132-1.13L2.13 6l4.526-4.525A.8.8 0 005.525.343L.435 5.434zM19 5.2H1v1.6h18V5.2z"
      />
    </svg>
  );
};

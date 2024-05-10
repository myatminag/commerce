import { SVGProps } from 'react';

export const VisibleIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 4.25C4.5 4.25 1.5 12 1.5 12s3 7.75 10.5 7.75S22.5 12 22.5 12s-3-7.75-10.5-7.75z"
      ></path>
      <path
        stroke="#191C1F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
      ></path>
    </svg>
  );
};

export const InvisibleIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.5 3.75l15 16.5M14.522 14.775a3.75 3.75 0 01-5.044-5.55"
      ></path>
      <path
        stroke="#191C1F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.938 6.431C3.112 8.363 1.5 12 1.5 12s3 6.75 10.5 6.75c1.757.014 3.493-.39 5.063-1.181M19.556 15.853C21.6 14.025 22.5 12 22.5 12s-3-6.75-10.5-6.75c-.65-.001-1.3.052-1.94.16M12.703 8.316a3.74 3.74 0 013.028 3.328"
      ></path>
    </svg>
  );
};

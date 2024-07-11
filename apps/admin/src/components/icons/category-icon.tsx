import { SVGProps } from 'react';

export const CategoryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      fill="none"
      viewBox="0 0 18 20"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.778"
        d="M8.137 1.224a1.778 1.778 0 011.726 0l6.68 3.71a.889.889 0 01.457.778v7.32c0 .645-.35 1.24-.914 1.553l-6.223 3.457a1.778 1.778 0 01-1.726 0l-6.223-3.457A1.778 1.778 0 011 13.031v-7.32c0-.322.175-.62.457-.776l6.68-3.711z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.778"
        d="M5 2.967l8 4.444v3.111M3.667 9.925l2.666 1.486"
      ></path>
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.778"
        d="M1 5.19l8 4.444m0 0l8-4.444M9 9.634v8.445"
      ></path>
    </svg>
  );
};

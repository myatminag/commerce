import type { SVGProps } from "react";

export const BrandIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.615 2a.923.923 0 1 0 0 1.846h6.77a.923.923 0 0 0 0-1.846zM3.846 5.693a.923.923 0 0 1 .923-.923h10.462a.923.923 0 0 1 0 1.846H4.769a.923.923 0 0 1-.923-.923"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 10.924a3.385 3.385 0 0 1 3.385-3.385h9.23A3.385 3.385 0 0 1 18 10.924v3.692a3.385 3.385 0 0 1-3.385 3.385h-9.23A3.385 3.385 0 0 1 2 14.616zm3.385-1.539c-.85 0-1.539.69-1.539 1.539v3.692c0 .85.69 1.538 1.539 1.538h9.23c.85 0 1.539-.689 1.539-1.538v-3.692c0-.85-.69-1.539-1.539-1.539z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

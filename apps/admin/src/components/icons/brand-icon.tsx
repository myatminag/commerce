import type { SVGProps } from 'react';

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
        d="M6.615 2a.923.923 0 000 1.846h6.77a.923.923 0 000-1.846h-6.77zM3.846 5.693a.923.923 0 01.923-.923h10.462a.923.923 0 010 1.846H4.769a.923.923 0 01-.923-.923z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 10.923a3.385 3.385 0 013.385-3.385h9.23A3.385 3.385 0 0118 10.923v3.692A3.385 3.385 0 0114.615 18h-9.23A3.385 3.385 0 012 14.615v-3.692zm3.385-1.539c-.85 0-1.539.69-1.539 1.539v3.692c0 .85.69 1.539 1.539 1.539h9.23c.85 0 1.539-.69 1.539-1.539v-3.692c0-.85-.69-1.539-1.539-1.539h-9.23z"
        clipRule="evenodd"
      />
    </svg>
  );
};

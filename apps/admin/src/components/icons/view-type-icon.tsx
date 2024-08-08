import type { SVGProps } from 'react';

export const CardViewIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        fill="#04A88C"
        d="M4.2 0H2.1A2.1 2.1 0 000 2.1v2.1c0 1.16.94 2.1 2.1 2.1h2.1a2.1 2.1 0 002.1-2.1V2.1A2.1 2.1 0 004.2 0zM11.9 0H9.8a2.1 2.1 0 00-2.1 2.1v2.1c0 1.16.94 2.1 2.1 2.1h2.1A2.1 2.1 0 0014 4.2V2.1A2.1 2.1 0 0011.9 0zM4.2 7.7H2.1A2.1 2.1 0 000 9.8v2.1C0 13.06.94 14 2.1 14h2.1a2.1 2.1 0 002.1-2.1V9.8a2.1 2.1 0 00-2.1-2.1zM11.9 7.7H9.8a2.1 2.1 0 00-2.1 2.1v2.1c0 1.16.94 2.1 2.1 2.1h2.1a2.1 2.1 0 002.1-2.1V9.8a2.1 2.1 0 00-2.1-2.1z"
      />
    </svg>
  );
};

export const RowViewIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        fill="#04A88C"
        d="M2.25 7.313h13.5v3.375H2.25V7.312zM2.25 14.625a1.125 1.125 0 001.125 1.125h11.25a1.125 1.125 0 001.125-1.125v-2.813H2.25v2.813zM14.625 2.25H3.375A1.125 1.125 0 002.25 3.375v2.813h13.5V3.374a1.125 1.125 0 00-1.125-1.125z"
      />
    </svg>
  );
};

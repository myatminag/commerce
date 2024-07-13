import type { SVGProps } from 'react';

export const DeleteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="none"
      viewBox="0 0 34 34"
      {...props}
    >
      <rect width="33" height="33" x="0.5" y="0.5" fill="#EFFEF9" rx="16.5" />
      <rect width="33" height="33" x="0.5" y="0.5" stroke="#E7F3F1" rx="16.5" />
      <path
        stroke="#01322D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M15.334 16.167v5M18.666 16.167v5M10.334 12.833h13.333M12 12.833h10V22a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 0112 22v-9.167zM14.5 11.167c0-.92.746-1.667 1.667-1.667h1.666c.92 0 1.667.746 1.667 1.667v1.666h-5v-1.666z"
      />
    </svg>
  );
};

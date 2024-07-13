import type { SVGProps } from 'react';

export const EditIcon = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#01322D"
        fillRule="evenodd"
        d="M23.267 9.83a2.125 2.125 0 00-3.005 0L10.234 19.86a2.124 2.124 0 00-.581 1.086l-.416 2.079a1.417 1.417 0 001.667 1.667l2.079-.416c.411-.082.79-.284 1.086-.581l10.028-10.028c.83-.83.83-2.176 0-3.005l-.83-.83zm-2.003 1.002a.708.708 0 011.002 0l.83.83a.708.708 0 010 1.002l-1.893 1.892-1.831-1.831 1.892-1.893zm-2.894 2.894l-7.135 7.135a.708.708 0 00-.193.362l-.416 2.079 2.08-.416a.709.709 0 00.361-.194l7.134-7.134-1.831-1.832z"
        clipRule="evenodd"
      />
    </svg>
  );
};

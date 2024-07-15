import type { SVGProps } from 'react';

export const ProductUploadIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="113"
      height="113"
      fill="none"
      viewBox="0 0 113 113"
      {...props}
    >
      <rect
        width="113"
        height="113"
        fill="#DBF6F2"
        fillOpacity="0.72"
        rx="56.5"
      />
      <path
        stroke="#04A88C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.905"
        d="M76.386 44.772H89.16m-6.387-6.386v12.772"
      />
      <g clipPath="url(#clip0_484_4133)">
        <path
          fill="#04A88C"
          d="M71.167 45.5H37.833v10H39.5v18.333a3.332 3.332 0 003.334 3.334h23.333a3.332 3.332 0 003.333-3.334V55.5h1.667v-10zm-30 3.333h26.666v3.334H41.168v-3.334zm25 25H42.833V55.5h23.334v18.333zm-16.667-15h10a3.332 3.332 0 01-3.333 3.334h-3.334a3.332 3.332 0 01-3.333-3.334z"
        />
      </g>
      <defs>
        <clipPath id="clip0_484_4133">
          <path
            fill="#fff"
            d="M0 0H40V40H0z"
            transform="translate(34.5 40.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

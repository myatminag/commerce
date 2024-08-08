import type { SVGProps } from 'react';

export const ExpandableIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <g filter="url(#filter0_d_948_3064)">
        <circle cx="18" cy="18" r="14" fill="#fff" />
      </g>
      <path
        fill="#087D6A"
        d="M15.29 12.71a.996.996 0 000 1.41L19.17 18l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L16.7 12.7c-.38-.38-1.02-.38-1.41.01z"
      />
      <defs>
        <filter
          id="filter0_d_948_3064"
          width="36"
          height="36"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.771983 0 0 0 0 0.830833 0 0 0 0 0.821276 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_948_3064"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_948_3064"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

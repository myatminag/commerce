import type { SVGProps } from "react";

export const CategoryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_1009_860)">
        <path d="M10 4.171l2.02 3.162H7.943l2.058-3.162zm0-2.17a.8.8 0 00-.647.38L5.886 7.714a.876.876 0 000 .762.724.724 0 00.648.381h6.895a.8.8 0 00.648-.38.686.686 0 000-.763l-3.429-5.333a.724.724 0 00-.647-.38zM17.238 17.619h-5.334a.762.762 0 01-.761-.762v-5.333a.762.762 0 01.761-.762h5.334a.762.762 0 01.762.762v5.333a.762.762 0 01-.762.762zm-4.572-1.524h3.81v-3.81h-3.81v3.81zM5.81 11.905a2.285 2.285 0 110 4.57 2.285 2.285 0 010-4.57zm0-1.524a3.81 3.81 0 100 7.619 3.81 3.81 0 000-7.62z" />
      </g>
      <defs>
        <clipPath id="clip0_1009_860">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

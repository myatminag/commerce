import type { SVGProps } from "react";

export const DashboardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path fill="currentColor" fillOpacity="0.01" d="M0 0H20V20H0z" />
      <path
        fill="currentColor"
        d="M17.5 14.167H4.162a.837.837 0 01-.829-.84V5a.833.833 0 10-1.666 0v8.326a2.503 2.503 0 002.495 2.508H17.5a.833.833 0 000-1.667zM15 7.5V10a.833.833 0 001.667 0V6.667a.833.833 0 00-.834-.833H12.5a.833.833 0 000 1.666H15z"
      />
      <path
        fill="currentColor"
        d="M11.078 11.423a.833.833 0 001.178 0l3.333-3.334a.833.833 0 10-1.178-1.178l-2.744 2.744-1.911-1.91a.833.833 0 00-1.178 0l-3.334 3.333a.833.833 0 001.179 1.178l2.744-2.744 1.91 1.91z"
      />
    </svg>
  );
};

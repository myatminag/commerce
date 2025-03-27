import { SVGProps } from "react";

export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
      {...props}
    >
      <rect
        width="29.6"
        height="29.6"
        x="0.2"
        y="0.2"
        fill="#E3E9FF"
        fillOpacity="0.68"
        rx="6.8"
      ></rect>
      <rect
        width="29.6"
        height="29.6"
        x="0.2"
        y="0.2"
        stroke="#C6D4FB"
        strokeWidth="0.4"
        rx="6.8"
      ></rect>
      <path
        fill="#0F60FF"
        d="M9.55 10.453a.7.7 0 1 0 0 1.4h11.2a.7.7 0 1 0 0-1.4zM10.95 16.048a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4M15.85 15.348a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0M19.35 16.048a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4M11.65 19.9a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0M15.15 20.6a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4M20.05 19.9a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0"
      ></path>
      <path
        fill="#0F60FF"
        fillRule="evenodd"
        d="M10.6 4.5a.7.7 0 0 1 .7.7h8.4a.7.7 0 1 1 1.4 0v.176a5.6 5.6 0 0 1 4.2 5.424v9.1a5.6 5.6 0 0 1-5.6 5.6h-9.1A5.6 5.6 0 0 1 5 19.9v-9.1a5.6 5.6 0 0 1 4.9-5.557V5.2a.7.7 0 0 1 .7-.7m9.1 2.1v.35a.7.7 0 1 0 1.4 0v-.111a4.2 4.2 0 0 1 2.8 3.961v9.1a4.2 4.2 0 0 1-4.2 4.2h-9.1a4.2 4.2 0 0 1-4.2-4.2v-9.1a4.2 4.2 0 0 1 3.5-4.142v.292a.7.7 0 1 0 1.4 0V6.6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

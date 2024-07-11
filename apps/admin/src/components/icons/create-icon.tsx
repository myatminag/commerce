import { SVGProps } from 'react';

const CreateIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <g clipPath="url(#clip0_447_746)">
        <path
          fill="#04A88C"
          fillRule="evenodd"
          d="M22 17h-5v5c0 .55-.448 1-1 1s-1-.45-1-1v-5h-5c-.552 0-1-.45-1-1s.448-1 1-1h5v-5c0-.55.448-1 1-1s1 .45 1 1v5h5c.552 0 1 .45 1 1s-.448 1-1 1zm6-17H4a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4V4a4 4 0 00-4-4z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_447_746">
          <path fill="#fff" d="M0 0H32V32H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CreateIcon;

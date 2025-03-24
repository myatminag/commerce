import type { SVGProps } from "react";

export const TranslationIcon = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#01322D"
        d="M10.27 16.461c.307 0 .576.27.576.577v1.23c0 .309-.27.578-.577.578H9.04a.591.591 0 01-.577-.577v-1.23c0-.309.269-.578.576-.578h1.231zM10.846 13.5c0-.808.5-1.539 1.193-1.846h.038c2-.808 3.384-2.77 3.384-5.077 0-3-2.461-5.462-5.461-5.462-2.77 0-5.077 2.039-5.462 4.693v.038c-.038.346.231.615.577.615h1.231c.308 0 .539-.192.577-.423v-.077a3.096 3.096 0 013.039-2.5 3.102 3.102 0 013.115 3.116c0 .807-.308 1.538-.808 2.115l-.038.039c-.346.384-.808.615-1.27.769a3.851 3.851 0 00-2.576 3.615v.577c0 .308.23.539.538.539h1.23c.308 0 .616-.231.616-.577l.077-.154z"
      />
    </svg>
  );
};

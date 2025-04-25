"use client";

import { useRouter } from "next/navigation";

import { Button } from "@workspace/ui/components/button";

const ActionButton = () => {
  const router = useRouter();

  return (
    <Button
      variant="none"
      onClick={() => router.back()}
      className="text-sm font-light text-neutral-950 has-[>svg]:px-0"
    >
      <svg
        width="19"
        height="12"
        viewBox="0 0 19 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.434315 5.43431C0.121895 5.74673 0.121895 6.25327 0.434315 6.56569L5.52548 11.6569C5.8379 11.9693 6.34443 11.9693 6.65685 11.6569C6.96927 11.3444 6.96927 10.8379 6.65685 10.5255L2.13137 6L6.65685 1.47452C6.96927 1.1621 6.96927 0.655565 6.65685 0.343146C6.34443 0.0307264 5.8379 0.0307264 5.52548 0.343146L0.434315 5.43431ZM19 5.2L1 5.2V6.8L19 6.8V5.2Z"
          fill="black"
        />
      </svg>
      Back
    </Button>
  );
};

export default ActionButton;

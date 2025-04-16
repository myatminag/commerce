import { Badge } from "@workspace/ui/components/badge";

const statusColor = {
  pending: "oklch(65.45% 0.137 104.69)",
  publish: "oklch(0.97 0.0491 175.79)",
};

export const paymentStatus = (status: string) => {
  return (
    <Badge
      className="font-semibold capitalize text-neutral-950"
      style={{
        background: statusColor[status as keyof typeof statusColor],
      }}
    >
      {status}
    </Badge>
  );
};

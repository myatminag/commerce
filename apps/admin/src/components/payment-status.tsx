import { Badge } from "@workspace/ui/components/badge";

const statusColor = {
  pending: "oklch(65.45% 0.137 104.69)",
};

export const paymentStatus = (status: string) => {
  return (
    <Badge
      className="font-normal capitalize text-white"
      style={{
        background: statusColor[status as keyof typeof statusColor],
      }}
    >
      {status}
    </Badge>
  );
};

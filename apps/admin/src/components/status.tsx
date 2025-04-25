import { Badge } from "@workspace/ui/components/badge";

const statusVariants = {
  pending: "bg-pending",
  delivered: "bg-publish",
  publish: "bg-publish",
  active: "bg-publish",
  paid: "bg-publish",
  draft: "",
  failed: "",
  "order-placed": "bg-pending",
};

export const status = (status: string) => {
  const bgColor = statusVariants[status as keyof typeof statusVariants];

  return (
    <Badge className={`font-medium capitalize text-white ${bgColor}`}>
      {status.replace(/-/g, " ")}
    </Badge>
  );
};

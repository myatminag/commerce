import { Badge } from "@workspace/ui/components/badge";

const statusVariants = {
  pending: "bg-pending",
  delivered: "bg-delivered",
  publish: "bg-publish",
  draft: "",
  failed: "",
};

export const status = (status: string) => {
  const bgColor = statusVariants[status as keyof typeof statusVariants];

  return (
    <Badge className={`font-medium capitalize text-white ${bgColor}`}>
      {status}
    </Badge>
  );
};

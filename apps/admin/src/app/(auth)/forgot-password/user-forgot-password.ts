import * as z from "zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useRecoverPassword } from "../../../services/auth/recover-password";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Invalid Email!" }),
});

type SchemaType = z.infer<typeof schema>;

export const useForgotPassword = () => {
  const {
    formState: { errors },
    reset,
    register,
    handleSubmit,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutate } = useRecoverPassword();

  const handleForgotPassword: SubmitHandler<SchemaType> = (data) => {
    mutate(
      { email: data.email },
      {
        onSuccess: () => {
          toast.success("Request Password Reset", {
            description: "Please check your email for further instructions.",
          });
          reset();
        },
        onError: () => {
          toast.error("Fail Request Password Reset", {
            description: "Please try again later.",
          });
        },
      },
    );
  };

  return {
    errors,
    isPending,
    register,
    handleSubmit,
    handleForgotPassword,
  };
};

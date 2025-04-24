import { useRouter, useSearchParams } from "next/navigation";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Invalid Email!" }),
  password: z
    .string()
    .min(1, { message: "Password is required!" })
    .min(4, { message: "Password must be at least 4 characters!" }),
});

type SchemaType = z.infer<typeof schema>;

export const useSignIn = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const handleSignIn: SubmitHandler<SchemaType> = async (data) => {
    router.push("/");

    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Whoops. Something Went Wrong!", {
          description:
            "Unable to sign in. Please double-check your credentials, and try again.",
        });
      } else {
        router.replace("/");
      }
    } catch (error: unknown) {
      toast.error("Our server just broke up!", {
        description: "We're working on fixing the problem. Be back soon.",
      });
    }
  };

  return {
    isSubmitting,
    errors,
    register,
    handleSubmit,
    handleSignIn,
  };
};

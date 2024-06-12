import * as z from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRecoverPassword } from '@apis/auth/recover-password';

import { useToast } from '@repo/ui/components/toast/use-toast';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Invalid Email!' }),
});

type SchemaType = z.infer<typeof schema>;

export const useForgotPassword = () => {
  const { toast } = useToast();

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
    return mutate(
      { email: data.email },
      {
        onSuccess: (res) => {
          toast({
            title: 'Request Password Reset Successful.',
            description: res.message,
            variant: 'success',
          });
          reset();
        },
        onError: (err: any) => {
          toast({
            title: err.response.data.error,
            description: err.response.data.message,
            variant: 'destructive',
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

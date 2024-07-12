import * as z from 'zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
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
    mutate(
      { email: data.email },
      {
        onSuccess: (res: any) => {
          toast({
            title: 'Request Password Reset Successful.',
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- Temporary disabling the rule because of unknown response type
            description: res.message,
            variant: 'success',
          });
          reset();
        },
        onError: (err: any) => {
          toast({
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- Temporary disabling the rule because of unknown response type
            title: err.response.data.error,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- Temporary disabling the rule because of unknown response type
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

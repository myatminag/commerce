import * as z from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRecoverPassword } from '@apis/auth/recover-password';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Invalid Email!' }),
});

type SchemaType = z.infer<typeof schema>;

export const useForgotPassword = () => {
  const {
    formState: { errors },
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
        onSuccess: () => {},
        onError: () => {},
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

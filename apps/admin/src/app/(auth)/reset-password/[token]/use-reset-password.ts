import { usePathname, useRouter } from 'next/navigation';
import * as z from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useSetNewPassword } from '@apis/auth/reset-password';

import { useToast } from '@repo/ui/components/toast/use-toast';

const schema = z
  .object({
    password: z
      .string()
      .min(1, { message: 'New password is required!' })
      .min(4, {
        message: 'New Password must be at least 4 characters!',
      }),
    cpassword: z
      .string()
      .min(1, { message: 'Confirm password is required!' })
      .min(4, {
        message: 'Confirm Password must be at least 4 characters!',
      }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: 'Passwords do not match!',
    path: ['cpassword'],
  });

type SchemaType = z.infer<typeof schema>;

export const useResetPassword = () => {
  const router = useRouter();
  const pathname = usePathname();

  const sessionToken = pathname.split('/')[2];

  const { toast } = useToast();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutate } = useSetNewPassword({
    sessionToken,
  });

  const handleResetPassword: SubmitHandler<SchemaType> = (data) => {
    return mutate(
      {
        password: data.password,
      },
      {
        onSuccess: (res) => {
          router.replace('/');
          toast({
            title: 'Access Restored! Password Has Been Reset.',
            description: `${res.data.message}. Sign in now with your new credentials.`,
            variant: 'success',
          });
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
    handleResetPassword,
  };
};

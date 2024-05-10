import { useRouter, useSearchParams } from 'next/navigation';
import * as z from 'zod';
import { useTransition } from 'react';
import { signIn } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Invalid Email!' }),
  password: z
    .string()
    .min(1, { message: 'Password is required!' })
    .min(4, { message: 'Password must be at least 4 characters!' }),
});

type SchemaType = z.infer<typeof schema>;

export const useSignIn = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const [isPending, startTransition] = useTransition();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const handleSignIn: SubmitHandler<SchemaType> = (data) => {
    startTransition(async () => {
      try {
        const res = await signIn('credentials', {
          email: data.email,
          password: data.password,
          callbackUrl,
          redirect: false,
        });

        if (res?.error) {
          console.log('err', res?.error);
          res.error;
        } else {
          router.replace('/');
        }
      } catch (err) {
        console.log('err', err);
      }
    });
  };

  return {
    isPending,
    errors,
    register,
    handleSubmit,
    handleSignIn,
  };
};

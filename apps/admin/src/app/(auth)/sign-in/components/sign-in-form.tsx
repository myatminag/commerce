'use client';

import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/inputs/input';
import { PasswordInput } from '@repo/ui/components/inputs/password-input';

import { useSignIn } from '../use-sign-in';

const SignInForm = () => {
  const { errors, register, handleSignIn, handleSubmit } = useSignIn();

  return (
    <div className="grid gap-6">
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="grid gap-2 space-y-4"
      >
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          {...register('email')}
          errors={errors.email?.message}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          {...register('password')}
          errors={errors.password?.message}
        />
        <Button>Sign In with Email</Button>
      </form>
    </div>
  );
};

export default SignInForm;

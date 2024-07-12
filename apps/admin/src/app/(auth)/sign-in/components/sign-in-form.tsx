'use client';

import Link from 'next/link';

import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/inputs/input';
// import { Checkbox } from '@repo/ui/components/inputs/checkbox';
import { PasswordInput } from '@repo/ui/components/inputs/password-input';

import { useSignIn } from '../use-sign-in';

const SignInForm = () => {
  const { isSubmitting, errors, register, handleSignIn, handleSubmit } =
    useSignIn();

  return (
    <div className="grid gap-6">
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="grid gap-2 space-y-3"
      >
        <Input
          type="email"
          label="Email"
          id="email"
          placeholder="Enter your email address"
          {...register('email')}
          errors={errors.email?.message}
        />
        <PasswordInput
          label="Password"
          id="passowrd"
          placeholder="Enter your password"
          {...register('password')}
          errors={errors.password?.message}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <Checkbox id="terms2" disabled /> */}
            <label
              htmlFor="terms2"
              className="text-primary-800 text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember Me
            </label>
          </div>
          <Link
            href="/forgot-password"
            className="text-primary-800 text-base underline"
          >
            Forgot Password?
          </Link>
        </div>
        <Button disabled={isSubmitting}>Sign In</Button>
      </form>
    </div>
  );
};

export default SignInForm;

'use client';

import { Button } from '@repo/ui/components/button';
import { PasswordInput } from '@repo/ui/components/inputs/password-input';

import { useResetPassword } from '../use-reset-password';

const ResetPasswordForm = () => {
  const { errors, isPending, register, handleSubmit, handleResetPassword } =
    useResetPassword();

  return (
    <div className="grid gap-6">
      <form
        onSubmit={handleSubmit(handleResetPassword)}
        className="grid gap-2 space-y-4"
      >
        <PasswordInput
          label="New Password"
          placeholder="Enter new password"
          disabled={isPending}
          errors={errors?.password?.message}
          {...register('password')}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Enter confirm password"
          disabled={isPending}
          errors={errors?.cpassword?.message}
          {...register('cpassword')}
        />
        <Button disabled={isPending}>Reset Password</Button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;

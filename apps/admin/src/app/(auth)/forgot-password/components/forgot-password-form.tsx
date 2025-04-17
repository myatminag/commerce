"use client";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";

import { useForgotPassword } from "../user-forgot-password";

const ForgotPasswordForm = () => {
  const { errors, isPending, register, handleSubmit, handleForgotPassword } =
    useForgotPassword();

  return (
    <div className="grid gap-6">
      <form
        onSubmit={handleSubmit(handleForgotPassword)}
        className="grid gap-2 space-y-4"
      >
        <Input
          type="email"
          id="email"
          placeholder="Enter your email address"
          disabled={isPending}
          {...register("email")}
        />
        <Button disabled={isPending}>Sent resent link</Button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;

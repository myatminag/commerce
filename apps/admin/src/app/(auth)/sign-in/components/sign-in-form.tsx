"use client";

import Link from "next/link";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
// import { Checkbox } from '@workspace/ui/components/inputs/checkbox';
import { PasswordInput } from "@workspace/ui/components/inputs/password-input";

import { useSignIn } from "../use-sign-in";

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
          id="email"
          placeholder="Enter your email address"
          {...register("email")}
        />
        <PasswordInput
          label="Password"
          id="passowrd"
          placeholder="Enter your password"
          {...register("password")}
          errors={errors.password?.message}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <Checkbox id="terms2" disabled /> */}
            <label
              htmlFor="terms2"
              className="text-brand-900 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember Me
            </label>
          </div>
          <Link
            href="/forgot-password"
            className="text-brand-900 text-sm underline"
          >
            Forgot Password?
          </Link>
        </div>
        <Button disabled={isSubmitting} className="">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;

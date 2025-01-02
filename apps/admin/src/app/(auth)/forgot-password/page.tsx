import type { Metadata } from "next";
import Link from "next/link";

import { CdsIcon } from "@commerce/ui/icons/cds-icon";

import ForgotPasswordForm from "./components/forgot-password-form";
import { MaskFiveIcon, MaskFourIcon } from "@components/icons/mask-icons";

export const metadata: Metadata = {
  title: "Forgot password",
};

const Page = () => {
  return (
    <div className="container grid min-h-screen place-content-center lg:relative lg:max-w-none lg:px-0">
      <div className="shadow-card lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[360px]">
          <div className="flex flex-col items-center space-y-3 text-center">
            <CdsIcon className="text-brand-600 size-16" />
            <h1 className="text-2xl font-bold tracking-wide text-neutral-950">
              Forgot Password?
            </h1>
            <p className="text-sm font-light text-neutral-800">
              Enter the email address associated with your account and
              we&apos;ll send you a link to reset your password.
            </p>
          </div>
          <ForgotPasswordForm />
          <p className="px-8 text-center text-sm text-neutral-950">
            Remember your password?{" "}
            <Link href="/sign-in" className="underline underline-offset-4">
              Sign in
            </Link>
            .
          </p>
        </div>
      </div>
      <MaskFourIcon className="absolute left-0 top-0" />
      <MaskFiveIcon className="absolute right-0 top-0" />
    </div>
  );
};

export default Page;

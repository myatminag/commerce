import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

import { CdsIcon } from "@collex/ui/icons/cds-icon";

import SignInForm from "./components/sign-in-form";
import {
  MaskOneIcon,
  MaskTwoIcon,
  MaskThreeIcon,
} from "@components/icons/mask-icons";
import LoginImg from "@assets/images/login-img.webp";

export const metadata: Metadata = {
  title: "Sign in to cds.admin",
};

const Page = () => {
  return (
    <div className="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
        <div className="bg-brand-600 absolute inset-0" />
        <div className="relative z-20">
          <div className="flex items-center">
            <CdsIcon className="mr-2 size-12 text-white" />
            <p className="text-md font-bold">Capture Digital Shop</p>
          </div>
          <div className="mt-10 space-y-3 2xl:mt-20">
            <h3 className="text-3xl font-black">
              Grow your <br /> business online
            </h3>
            <p className="text-sm">
              Join thousands of successful sellers. Sign up for your <br />
              e-commerce dashboard.
            </p>
          </div>
          <Image
            src={LoginImg}
            alt="login-image"
            width={500}
            height={500}
            className="mt-10 2xl:mt-20 2xl:h-[430px] 2xl:w-[550px]"
          />
        </div>
        <MaskOneIcon className="absolute -right-[11.5rem] -top-1 z-30" />
        <MaskTwoIcon className="absolute bottom-0 left-0" />
        <MaskThreeIcon className="absolute bottom-0 right-0" />
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-bold text-neutral-950">
              Sign in to your account
            </h1>
            <p className="text-sm font-light text-neutral-800">
              Enter your email below to access your dashboard
            </p>
          </div>
          <Suspense>
            <SignInForm />
          </Suspense>
          <p className="px-8 text-center text-sm text-neutral-950">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-secondary-800 underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-secondary-800 underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

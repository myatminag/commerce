import { Metadata } from 'next';
import Link from 'next/link';

import ForgotPasswordForm from './components/forgot-password-form';

export const metadata: Metadata = {
  title: 'Forgot password',
};

const Page = () => {
  return (
    <div className="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Forgot your password?
            </h1>
            <p className="text-secondary-500 text-sm">
              Enter the email address associated with your account and we'll
              send you a link to reset your password.
            </p>
          </div>
          <ForgotPasswordForm />
          <p className="text-secondary-500 px-8 text-center text-base">
            Remember your password?{' '}
            <Link
              href="/sign-in"
              className="hover:text-secondary-800 underline underline-offset-4"
            >
              Sign in
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

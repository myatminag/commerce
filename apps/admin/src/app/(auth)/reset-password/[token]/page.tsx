import type { Metadata } from 'next';

import ResetPasswordForm from './components/reset-password-form';
import { MaskFiveIcon, MaskFourIcon } from '@components/icons/mask-icons';

export const metadata: Metadata = {
  title: 'Reset password',
};

const Page = () => {
  return (
    <div className="container relative grid min-h-screen place-content-center lg:max-w-none lg:px-0">
      <div className="shadow-card lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-bold tracking-wide text-neutral-950">
              Reset password
            </h1>
            <p className="text-sm font-light text-neutral-800">
              This password should be different from the previous password.
            </p>
          </div>
          <ResetPasswordForm />
        </div>
      </div>
      <MaskFourIcon className="absolute left-0 top-0" />
      <MaskFiveIcon className="absolute right-0 top-0" />
    </div>
  );
};

export default Page;

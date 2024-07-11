'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/inputs/input';

import UploadImage from './upload-image';
import { PlusIcon } from '@components/icons/plus-icon';
import { Label } from '@repo/ui/components/inputs/label';

const NewProductForm = () => {
  const { register } = useForm();

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-x-6">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-md bg-white shadow-sm">
            <p className="text-heading border-b border-gray-200 p-4 font-medium">
              Product Information
            </p>
            <div className="space-y-3 p-4">
              <div className="space-y-1">
                <Label>Upload Image</Label>
                <label
                  htmlFor="af-submit-app-upload-images"
                  className="border-primary-200 group block cursor-pointer rounded-lg border-2 border-dashed p-4 text-center lg:p-7"
                >
                  <input
                    id="af-submit-app-upload-images"
                    name="af-submit-app-upload-images"
                    type="file"
                    className="sr-only"
                  />
                  <div className="border-primary-200 mx-auto flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-dashed">
                    <div className="bg-primary-200 flex h-10 w-10 items-center justify-center rounded-full">
                      <PlusIcon className="text-primary h-5 w-5" />
                    </div>
                  </div>
                  <span className="mt-2 block text-base text-neutral-800">
                    Browse your device or{' '}
                    <span className="text-primary">drag&apos;n drop&apos;</span>
                  </span>
                  <span className="mt-1 block text-sm text-gray-500">
                    Maximum file size is 2 MB
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-center gap-x-6">
                <Input
                  label="Product name"
                  placeholder="Enter product name"
                  className="w-full"
                  {...register('displayPrice')}
                />

                <Input
                  label="Sku"
                  placeholder="Enter product sku"
                  className="w-full"
                  {...register('displayPrice')}
                />
              </div>
              <div className="flex items-center justify-center gap-x-6">
                <Input
                  label="Price"
                  placeholder="Enter product price"
                  className="w-full"
                  {...register('displayPrice')}
                />

                <Input
                  label="Cost of good"
                  placeholder="Enter product cost"
                  className="w-full"
                  {...register('displayPrice')}
                />
              </div>
              <div className="flex items-center justify-center gap-x-6">
                <Input
                  label="Select categories"
                  placeholder="Enter product display price"
                  className="w-full"
                  {...register('displayPrice')}
                />

                <Input
                  label="Select brands"
                  placeholder="Enter product display price"
                  className="w-full"
                  {...register('displayPrice')}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 lg:space-y-4">
          <div className="w-full rounded-md bg-white shadow-sm">
            <p className="text-heading border-b border-gray-200 p-4 font-medium">
              Product Options
            </p>
            <div className="space-y-3 p-4">
              <Input
                label="Enter option name"
                placeholder="Eg: size or color"
              />

              <Input
                label="Enter values for this option"
                placeholder="Eg: small, medium, large"
              />

              <Button className="ms-auto flex items-center gap-x-2" size="sm">
                <CircleIcon />
                Add Options
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="ronuded-md w-full bg-white shadow-sm">
        <div className="border-b border-gray-200 p-4">
          <p className="text-heading font-medium">Product Information</p>
          <p className="text-base text-neutral-500">
            Based on your product options, these are the different versions of
            your product that customers can buy.
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default NewProductForm;

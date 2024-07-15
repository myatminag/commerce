'use client';

import { BrandUploadIcon } from '@components/icons/brand-upload-icon';

const RelatedBrands = () => {
  return (
    <div className="p-3">
      <div className="mt-16 flex flex-col items-center space-y-3">
        <BrandUploadIcon />
        <p className="text-base font-bold text-neutral-950">Upload Brands</p>
      </div>
    </div>
  );
};

export default RelatedBrands;

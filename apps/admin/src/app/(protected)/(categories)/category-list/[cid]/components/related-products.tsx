'use client';

import { ProductUploadIcon } from '@components/icons/product-upload-icon';

const RelatedProducts = () => {
  return (
    <div className="p-3">
      <div className="mt-16 flex flex-col items-center space-y-3">
        <ProductUploadIcon />
        <p className="text-base font-bold text-neutral-950">Upload Products</p>
      </div>
    </div>
  );
};

export default RelatedProducts;

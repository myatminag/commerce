'use client';

import Image from 'next/image';

const ProductList = () => {
  return (
    <div className="w-full rounded-md bg-white shadow-sm">
      <p className="text-heading border-b border-gray-200 p-4 font-medium text-neutral-800">
        Product List
      </p>
      <div className="space-y-4 p-4">
        {[...Array(3)].map((_, idx) => (
          <>
            <div key={idx} className="flex items-start gap-x-4">
              <Image
                className="size-16 flex-shrink-0 rounded-sm"
                src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                alt="Image Description"
                width={150}
                height={150}
              />
              <div className="flex-1 space-y-0.5">
                <p className="line-clamp-2 block text-base font-medium text-neutral-800">
                  Nike Air Max INTRLK for women. International size an..
                </p>
                <p className="block text-sm text-neutral-800">
                  Option: (Black, Medium)
                </p>
                <div className="flex items-center justify-between">
                  <p className="block text-sm text-neutral-800">
                    (123,000 Ks / pc)
                  </p>
                  <p className="text-primary-100 block text-base font-semibold">
                    123,000 Ks
                  </p>
                </div>
              </div>
            </div>
            {idx !== 2 && <hr />}
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

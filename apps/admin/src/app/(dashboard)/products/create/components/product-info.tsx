import { Fragment } from "react";

import { Input } from "@workspace/ui/components/input";
import { Combobox } from "@workspace/ui/components/combobox";
import { Label } from "@workspace/ui/components/inputs/label";

import { TextEditor } from "@/src/components/editor/text-editor";

const Brands = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "ember",
    label: "Ember.js",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "eleventy",
    label: "Eleventy",
  },
  {
    value: "solid",
    label: "SolidJS",
  },
  {
    value: "preact",
    label: "Preact",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "alpine",
    label: "Alpine.js",
  },
  {
    value: "lit",
    label: "Lit",
  },
];

const ProductInfo = () => {
  return (
    <Fragment>
      <p className="border-b p-6 text-base font-semibold uppercase text-neutral-700">
        Product Info
      </p>
      <div className="grid grid-cols-4 gap-6 p-6">
        <div className="col-span-2 space-y-2">
          <Label className="block">Product Name</Label>
          <Input placeholder="Enter product name" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">SKU</Label>
          <Input placeholder="Enter sku" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Minimum Stock</Label>
          <Input placeholder="Enter minimum stock" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Shipping Weight</Label>
          <Input placeholder="Enter shipping weight" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Price</Label>
          <Input placeholder="Enter price" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Minimum Price</Label>
          <Input placeholder="Enter minimum price" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Maximum Price</Label>
          <Input placeholder="Maximum Price" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Cost of good</Label>
          <Input placeholder="Enter cost of good" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Status</Label>
          <Input placeholder="Enter status" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Brand</Label>
          <Combobox options={Brands} placeholder="Select brand" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Category</Label>
          <Combobox options={Brands} placeholder="Select category" />
        </div>

        <div className="col-span-2 space-y-2">
          <Label className="block">Collection</Label>
          <Combobox options={Brands} placeholder="Select collection" />
        </div>

        <div className="col-span-4 space-y-3">
          <Label className="block">Description</Label>
          <TextEditor />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductInfo;

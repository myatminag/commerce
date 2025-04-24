"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { GoogleMap, useJsApiLoader, Libraries } from "@react-google-maps/api";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

const libraries = ["places", "drawing", "geometry"];

const center = {
  lat: 16.8409, // default latitude
  lng: 96.1735, // default longitude
};

const defaultMapContainerStyle = {
  width: "100%",
  height: "180px",
  borderRadius: "10px",
};

const MapProvider = ({ children }: { children: ReactNode }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? "",
    libraries: libraries as Libraries,
  });

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!isLoaded) return <p>Map Script is loading ...</p>;

  return children;
};

const CustomerInfo = () => {
  return (
    <Card>
      <CardHeader className="gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          <p className="text-heading font-medium">Customer Info</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex items-start gap-x-4">
          <Image
            className="size-14 flex-shrink-0 rounded-md"
            src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
            alt="Image Description"
            width={150}
            height={150}
          />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-neutral-950">
              Customer Name
            </p>
            <p className="text-sm text-neutral-950">0987654321</p>
          </div>
        </div>
        <MapProvider>
          <GoogleMap
            mapContainerStyle={defaultMapContainerStyle}
            zoom={10}
            center={center}
          />
        </MapProvider>
        <div className="flex flex-col items-start">
          <p className="font-medium text-neutral-950">Ahlone, Yangon</p>
          <p className="text-sm text-neutral-950">
            45 Roker Terrace Latheronwheel KW5 8NW, London, UK
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerInfo;

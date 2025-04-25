"use client";

import { ReactNode } from "react";
import { GoogleMap, useJsApiLoader, Libraries } from "@react-google-maps/api";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";

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

  if (!isLoaded) {
    return <Skeleton className="h-[180px] w-full rounded-[10px]" />;
  }

  return children;
};

const AddressInfo = () => {
  return (
    <Card>
      <CardHeader className="gap-0 border-b">
        <CardTitle className="text-base font-semibold uppercase text-neutral-700">
          <p className="text-heading font-medium">Address Info</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex items-start gap-x-3">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-8"
          >
            <path
              d="M0 21.1998H7.18136L8.24773 16.7927L2.34657 17.5036L0 21.1998ZM15.3569 14.3045L18.4116 13.949L17.4896 12.3828H14.7876L15.3569 14.3045ZM19.2669 15.5125L11.8023 16.3651L11.9439 21.1998H22.7493L19.2669 15.5125Z"
              fill="#5FFFBA"
            />
            <path
              d="M14.7154 2.71768C13.3657 1.36528 11.7301 0.726562 9.88059 0.726562C8.0311 0.726562 6.39821 1.36528 5.04581 2.71768C3.69618 4.06731 3.05469 5.63354 3.05469 7.48026C3.05469 9.18534 3.8378 10.821 5.32906 12.5289L5.40126 12.6011L7.46181 15.0893C7.81727 15.6586 8.17272 16.1556 8.45598 16.7249C9.02527 17.8635 9.52235 19.3548 9.95001 21.2737C10.3777 19.3548 10.8748 17.8607 11.444 16.7249C12.0133 15.5864 12.8659 14.3784 14.0044 13.0982L14.4321 12.5289C15.9261 10.8238 16.7065 9.18812 16.7065 7.48026C16.7065 5.63077 16.0678 3.99788 14.7154 2.71768ZM9.81116 10.9626C7.82004 10.9626 6.18438 9.32697 6.18438 7.33585C6.18438 5.34474 7.82004 3.70907 9.81116 3.70907C11.8023 3.70907 13.4379 5.34474 13.4379 7.33585C13.4379 9.32697 11.8023 10.9626 9.81116 10.9626Z"
              fill="#0D5FC3"
              fillOpacity="0.8"
            />
            <path
              d="M3.55444 15.5135L7.46448 15.0859L5.40393 12.5977L3.55444 15.5135Z"
              fill="#5FFFBA"
            />
          </svg>
          <div>
            <p className="font-medium text-neutral-950">Ahlone, Yangon</p>
            <p className="text-sm text-neutral-950">
              45 Roker Terrace Latheronwheel KW5 8NW, London, UK
            </p>
          </div>
        </div>
        <MapProvider>
          <GoogleMap
            mapContainerStyle={defaultMapContainerStyle}
            zoom={10}
            center={center}
          />
        </MapProvider>
      </CardContent>
    </Card>
  );
};

export default AddressInfo;

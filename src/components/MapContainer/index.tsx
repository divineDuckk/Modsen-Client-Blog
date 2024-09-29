"use client";

import dynamic from "next/dynamic";
import { FC, useMemo } from "react";

export const MapContainer: FC = () => {
  const Map = useMemo(() => dynamic(() => import("./Map"), { ssr: false }), []);
  return (
    <div className="w-full">
      <Map />
    </div>
  );
};

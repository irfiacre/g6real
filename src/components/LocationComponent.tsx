import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const LocationComponent = ({ text }: { text: string }) => {
  return (
    <div className="text-primary py-1.5 text-center capitalize">
      <div className="flex flex-row items-center gap-1.5">
        <Icon icon="mdi:location" fontSize={24} />
        <span>{text}</span>
      </div>
    </div>
  );
};

export default LocationComponent;

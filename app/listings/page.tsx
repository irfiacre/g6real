import AllListingsSection from "@/src/views/listings/AllListingsSection";
import LatestListingsSection from "@/src/views/listings/LatestListingsSection";
import React from "react";

const Page = () => {
  return (
    <div className="mt-16">
      <LatestListingsSection />
      <AllListingsSection />
    </div>
  );
};

export default Page;

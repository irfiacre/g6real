"use client";
import React, { useState } from "react";
import { LISTINGS } from "@/constants/fixtures";
import ListingCard from "../../components/cards/ListingCard";
import { ListingType } from "@/constants/interfaces";

const LatestListingsSection = () => {
  const [cardContent, setCardContent] = useState<Array<ListingType>>([
    ...LISTINGS
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  // useEffect(() => {
  //   (async () => {
  //     setLoading(true);
  //     const result = await getProperties();
  //     setCardContent(result);
  //     setLoading(false);
  //   })();
  // }, []);

  return (
    <section className="pt-10 px-10 pb-10 align-middle max-md:px-5 space-y-5">
      <div className="px-2">
        <span className="text-primary text-4xl font-semibold">
          New
        </span>
      </div>
      {/* <div> */}
        <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2">
          {cardContent.map((item: ListingType) => (
            <ListingCard key={item.id} content={item} />
          ))}
          {!loading && !cardContent[0] && (
            <div className="py-10 px-10">
              <span className="text-textLightColor text-2xl font-light">
                No Listing Available
              </span>
            </div>
          )}
        </div>
    </section>
  );
};

export default LatestListingsSection;

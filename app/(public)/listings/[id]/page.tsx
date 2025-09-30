"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { formatPrice, handleContactWhatsapp } from "@/util/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
import BaseButton from "@/src/components/buttons/BaseButton";
import { LISTINGS } from "@/constants/fixtures";
import YouTube from "react-youtube";
import LocationComponent from "@/src/components/LocationComponent";
import PhotoViewer from "@/src/components/PhotoViewer";

const Page = () => {
  const {
    title,
    description,
    images,
    id,
    price,
    rooms,
    youtubeURL,
    location,
    isSold,
    thumbnail,
  } = LISTINGS[1];

  // useEffect(() => {
  //   if (id && user?.user_id) {
  //     (async () => {
  //       setLoading(true);
  //       const result = await findUserPropertyBooking(user.user_id, id);
  //       setBooking(result);
  //       setLoading(false);
  //     })();
  //   }
  // }, [listing]);

  const opts = {
    height: "150",
    width: "320",
    playerVars: {
      autoplay: 0,
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setIsOpen(true);
  };
  const onClose = () => setIsOpen(false);
  const onNext = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const onPrev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  return (
    <div className="mt-16">
      <div className="p-10 max-md:px-5">
        <div>
          <div className="flex flex-row gap-5 items-start justify-between max-md:flex-wrap">
            <div className="w-2/4 max-md:w-full">
              <Image
                className="rounded-xl w-full h-[30vh] object-cover bg-textLightColor"
                loader={() => thumbnail}
                src={thumbnail}
                alt={`${title}`}
                height={400}
                width={400}
                unoptimized
              />
            </div>

            <div className="space-y-5 w-full pt-2">
              <h1 className="text-xl font-bold text-primary text-justify max-md:text-lg">
                {title} <span className="text-sm">{isSold && "(SOLD)"}</span>
              </h1>
              <div>
                {images[0] && (
                  <div>
                    <p className="font-medium text-base py-2">Gallery</p>
                    <div className="flex flex-row flex-wrap items-center justify-start gap-2.5">
                      {images.map((src, i) => (
                        <Image
                          className="rounded-xl object-cover bg-textLightColor cursor-pointer"
                          loader={() => src}
                          src={src}
                          alt={"Listing gallery photo"}
                          height={150}
                          width={150}
                          unoptimized
                          key={src}
                          onClick={() => openAt(i)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <div className="w-full space-y-1 text-lg">
              <div className="flex flex-row items-center justify-start gap-10 pt-5 max-md:flex-wrap max-md:gap-5">
                <BaseButton
                  additionalCSS="flex flex-row items-start justify-center gap-2 px-30 normal-case"
                  handleClick={handleContactWhatsapp}
                >
                  <span>I want this one</span>
                  <Icon icon="ic:baseline-whatsapp" fontSize={24} />
                </BaseButton>

                <div className="flex flex-row items-center justify-center gap-2">
                  <Icon
                    icon="tdesign:money"
                    fontSize={28}
                    className="text-gray-700"
                  />
                  <span>{formatPrice(price)} Rwf</span>
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                  <Icon
                    icon="cbi:roomsother"
                    fontSize={28}
                    className="text-gray-700"
                  />
                  <span>{rooms} Rooms</span>
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                  <LocationComponent text={location} />
                </div>
              </div>
              <p className="text-textLightColor py-5 text-justify">
                {description}
              </p>
            </div>
            <div className="w-full">
              {youtubeURL && (
                <YouTube videoId={youtubeURL.split("/").at(-1)} opts={opts} />
              )}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <PhotoViewer
          images={images}
          index={index}
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </div>
  );
};

export default Page;

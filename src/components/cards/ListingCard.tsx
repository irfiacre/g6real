import React from "react";
import BaseCard from "./BaseCard";
import Image from "next/image";
import { ListingType } from "@/constants/interfaces";
import LocationComponent from "../LocationComponent";
import { handleContactWhatsapp } from "@/util/helpers";
import BaseButton from "../BaseButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const ListingCard = ({ content }: { content: ListingType }) => {
 
  return (
    <BaseCard
      key={`${content.id}`}
      className="w-full p-2 pb-5 space-y-2 flex flex-col justify-start cursor-pointer hover:bg-backgroundColor/50"
    >
      <Link href={`listings/${content.id}`} className="space-y-5">
        <div>
          <Image
            className="rounded-xl w-full h-[30vh] object-cover bg-textLightColor"
            loader={() => content.thumbnail}
            src={content.thumbnail}
            alt={`${content.title}`}
            height={400}
            width={400}
            unoptimized
          />
        </div>
        <div className="px-2 space-y-5 pb-2.5">
          <p className="text-xl text-justify">
            {content.title.substring(0, 50)}{" "}
            <span className="text-sm text-primary/50">
              {content.isSold ? "(Sold)" : ""}
            </span>
          </p>
          <LocationComponent text={content.location} />
        </div>
      </Link>

      <div className="px-2 flex flex-row items-center justify-between">
        <BaseButton
          additionalCSS="px-30 flex flex-row items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-default"
          disabled={content.isSold}
          handleClick={() =>
            handleContactWhatsapp(`
Hello G6 Real Estate, I am interested in this listing
Title: "${content.title}",
URL: ${window.location}/listings/${content.id}

Thank you
`)
          }
        >
          <span>Lets Talk</span>
          <Icon icon="ic:baseline-whatsapp" fontSize={24} />
        </BaseButton>

        {content.youtubeURL && (
          <Link
            target="_blank"
            href={content.youtubeURL}
            className="text-red-600 hover:text-red-400"
          >
            <Icon icon="line-md:youtube-filled" fontSize={48} />
          </Link>
        )}
      </div>
    </BaseCard>
  );
};

export default ListingCard;

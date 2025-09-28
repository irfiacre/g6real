import { Icon } from "@iconify/react/dist/iconify.js";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const TestimonyCard = ({
  name,
  avatarURL,
  text,
}: {
  name: string;
  avatarURL: string;
  text: string;
}) => {
  return (
    <div className="bg-testimonyBackground rounded-3xl border-backgroundColor2 p-10 cursor-pointer text-primary hover:bg-primary hover:text-primaryLight max-sm:p-5 space-y-5 ">
      <p className="pt-4 text-base text-justify">{text}</p>
      <div className="float-right">
        <Icon icon="fe:quote-right" fontSize={34} />
      </div>
      <div className="flex flex-row items-center justify-start gap-2.5">
        <div>
          <Image
            className="rounded-full"
            loader={() => avatarURL}
            src={avatarURL}
            alt="Avatar"
            height={42}
            width={42}
            unoptimized
          />
        </div>

        <p className="text-lg font-medium text-justify">
          {name.length > 10 ? `${name.substring(0, 10)}.` : name}
        </p>
      </div>
    </div>
  );
};

export default TestimonyCard;

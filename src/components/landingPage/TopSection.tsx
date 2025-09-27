import React from "react";
import BaseButton from "../BaseButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import Carousel from "../Carousel";

const TopSection = ({ user }: { user: any }) => {
  const slides = [
    {
      url: "https://picsum.photos/id/57/500/500",
      caption: "Beautiful Landscape 1",
    },
    {
      url: "https://picsum.photos/id/47/500/500",
      caption: "Stunning View 2",
    },
    {
      url: "https://picsum.photos/id/37/500/500",
      caption: "Another Scene 3",
    },
  ];
  return (
    <section
      className="mx-10 max-md:mx-3 bg-backgroundColor flex flex-row items-center justify-center"
      style={{ height: "45vh" }}
    >
      <div className="w-full">
        <h1 className="text-primary font-normal text-5xl">
          Best Real estate in Kigali.
        </h1>
        <p className="text-primary text-xl py-5">
          Let us guide you to become a home/land owner!
        </p>
        <div>
          <h2>Our Services</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-row items-center justify-start gap-2 py-2">
              <Icon
                icon="lucide:land-plot"
                fontSize={24}
                className="text-gray-700"
              />{" "}
              <span className="text-sm font-medium text-primary">
                Buying House/Land
              </span>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 py-2">
              <Icon
                icon="iconoir:home-sale"
                fontSize={24}
                className="text-gray-700"
              />{" "}
              <span className="text-sm font-medium text-primary">
                Selling House/Land
              </span>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 py-2">
              <Icon
                icon="mdi:construction"
                fontSize={24}
                className="text-gray-700"
              />{" "}
              <span className="text-sm font-medium text-primary">
                Constructions Services
              </span>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 py-2">
              <Icon
                icon="fluent:people-chat-16-filled"
                fontSize={24}
                className="text-gray-700"
              />{" "}
              <span className="text-sm font-medium text-primary">
                Consultation Services
              </span>
            </div>
          </div>
        </div>
        <div className="py-5 flex flex-row items-center justify-start gap-16">
          <div>
            <BaseButton
              label="Get in touch"
              handleClick={() => console.log("---- Get In touch")}
            />
          </div>
          <div>
            <p className="text-2xl text-primary/50">
              Trusted by <span className="text-primary text-5xl">100+</span>{" "}
              Customers
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-5 rounded-3xl">
        <Carousel slides={slides} />
      </div>
    </section>
  );
};

export default TopSection;

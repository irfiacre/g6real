"use client";
import React, { useState } from "react";
import BaseButton from "../../components/BaseButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import Carousel from "../../components/Carousel";
import BaseInput from "../../components/BaseInput";
import { SearchInterface } from "@/constants/interfaces";
import { handleContactWhatsapp } from "../../../util/helpers";

const TopSection = () => {
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
  const [state, setState] = useState<SearchInterface>({
    searchText: "",
    searchLocation: "",
  });

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setState((prevState: SearchInterface) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSearchButtonClicked = () => {
    console.log("-----------------");
  };

  return (
    <section className="px-10 py-5 bg-backgroundColor space-y-5 max-md:px-5">
      <div className="flex flex-row items-center justify-center max-md:flex-wrap">
        <div className="w-full max-md:text-center">
          <h1 className="text-primary font-normal text-5xl max-md:text-3xl">
            Best Real estate in Kigali.
          </h1>
          <p className="text-primary/80 text-lg py-5 max-md:text-base ">
            Let us guide you to become a home/land owner!
          </p>
          <div className="max-md:hidden">
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
          <div className="py-5 max-md:hidden">
            <BaseButton
              additionalCSS="block px-30 flex flex-row items-center justify-center gap-2"
              handleClick={() =>
                handleContactWhatsapp(
                  "I would like to work with you/ Ncaka ko twakorana!"
                )
              }
            >
              <span>Get in Touch</span>
              <Icon icon="ic:baseline-whatsapp" fontSize={24} />
            </BaseButton>
          </div>
        </div>
        <div className="w-full p-2 rounded-3xl">
          <Carousel slides={slides} />
        </div>
      </div>
      <div className="text-2xl text-primary/50 flex items-baseline justify-center gap-2">
        <span className="max-md:text-xl">Trusted by</span>
        <span className="text-primary text-7xl max-md:text-4xl">100+</span>{" "}
        <span className="max-md:text-xl">People</span>
      </div>
      <div className="flex flex-row items-center justify-center pb-10 max-md:flex-wrap max-md:space-y-2">
        <div className="w-full">
          <BaseInput
            id="searchText"
            onInputChange={handleInputChange}
            type="search"
            value={state.searchText}
            placeholder="Type keyword (Ex: apartment, house, land)..."
            additionalCSS="h-16 text-lg rounded-s-full border-none max-md:rounded-3xl"
          />
        </div>

        <div className="w-2/4 max-md:w-full">
          <select
            id="searchLocation"
            className="w-full p-4 ps-10 h-16 text-lg bg-[#F5F5F5] focus:outline-none max-md:rounded-3xl"
            onChange={handleInputChange}
            value={`${state.searchLocation}`}
          >
            <option value={"kicukiro"}>Kicukiro</option>
            <option value={"nyarugenge"}>Nyarugenge</option>
            <option value={"gasabo"}>Gasabo</option>
          </select>
        </div>

        <div className="w-2/4 max-md:w-full">
          <BaseButton
            label="Search"
            disabled={!state.searchText}
            handleClick={handleSearchButtonClicked}
            overrideCSS="max-md:w-full border-none capitalize px-28 bg-primary font-medium text-lg hover:bg-primary/95 hover:cursor-pointer text-white h-16 rounded-e-full disabled:bg-gray-400 disabled:cursor-default max-md:rounded-full max-md:py-5"
          />
          <div className="hidden max-md:block">
            <p className="text-center text-primary/50"> Or </p>
            <BaseButton
              additionalCSS="w-full px-30 py-5 flex flex-row items-center justify-center gap-2"
              handleClick={() =>
                handleContactWhatsapp(
                  "I would like to work with you/ Ncaka kubabaza!"
                )
              }
            >
              <span>Get in Touch</span>
              <Icon icon="ic:baseline-whatsapp" fontSize={24} />
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;

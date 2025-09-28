"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  const socialMedia = [
    { icon: "jam:linkedin", url: "https://www.linkedin.com/in/irfiacre/" },
    { icon: "mdi:github", url: "https://github.com/irfiacre" },
    { icon: "mdi:instagram", url: "https://www.instagram.com/irfiacre/" },
    { icon: "ant-design:x-outlined", url: "https://x.com/irfiacre" },
  ];

  return (
    <footer className="px-10 py-10 bg-primary text-primaryLight flex flex-row items-center justify-between max-md:px-5 max-md:flex-wrap max-md:space-y-10">
      <div className="space-y-10 w-full">
        <div className="flex items-center">
          <Icon icon="game-icons:house-keys" fontSize={40} className="" />
          <span className="text-4xl font-semibold">G6 Real Estate</span>
        </div>
        <div>
          <p className="font-sans">
            Copyright {new Date().getFullYear()} G6-Real Estate. All rights
            reserved. |{" "}
            <a href="#" className="underline hover:text-white">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="underline hover:text-white">
              Terms of Use
            </a>
          </p>
        </div>
      </div>

      <div className="w-full flex flex-row items-start justify-between gap-5 max-md:flex-wrap max-md:space-y-10 max-md:pl-2">
        <div className="space-y-4 max-md:w-full">
          <p className="text-xl font-semibold">Address</p>
          <p>Kigali, Rwanda</p>
          <p>
            <a href="tel:+250788888888" className="hover:text-white">Call G6 Real Estate <span className="font-sans hover:underline">+250-788-888-888</span></a>
          </p>
          <div className="flex flex-row items-center justify-start gap-5">
            {socialMedia.map((elt) => (
              <div key={elt.url} className="p-2 bg-white/10 rounded-full z-50">
                <a href={elt.url} target="_blank" className="z-1 hover:text-white">
                  <Icon
                    icon={elt.icon}
                    fontSize={18}
                    className=" opacity-100"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

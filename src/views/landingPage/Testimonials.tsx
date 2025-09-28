"use client";
import React from "react";
import { TESTIMONIALS } from "@/constants/fixtures";
import TestimonyCard from "../../components/cards/TestimonyCard";

const TestimonialsSection = () => {
  return (
    <section className="pt-10 px-10 pb-10 align-middle max-md:px-5 space-y-5">
      <div className="px-2">
        <span className="text-primary text-4xl font-semibold">
          Testimonials
        </span>
      </div>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2">
        {TESTIMONIALS.map(
          (testimony: { text: string; avatar: string; name: string }) => (
            <TestimonyCard
              key={testimony.avatar}
              name={testimony.name}
              avatarURL={testimony.avatar}
              text={testimony.text}
            />
          )
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;

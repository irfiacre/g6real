"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  url: string;
  caption: string;
}

interface CarouselProps {
  slides: Slide[];
}

export default function CarouselWithText({ slides }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // auto-play every 5 sec (optional)
  useEffect(() => {
    const h = setInterval(next, 5000);
    return () => clearInterval(h);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between z-20 pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto p-2 bg-white/70 hover:bg-white rounded-full m-2"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="pointer-events-auto p-2 bg-white/70 hover:bg-white rounded-full m-2"
        >
          ▶
        </button>
      </div>

      {/* Slides */}
      <div className="relative h-64 sm:h-80 md:h-96">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={slides[index].url}
              alt={slides[index].caption}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay to reduce brightness */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold text-center">
                {slides[index].caption}
              </h2>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

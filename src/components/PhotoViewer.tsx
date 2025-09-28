"use client";
import { useEffect } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function PhotoViewer({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl"
        onClick={onClose}
      >
        ✕
      </button>
      <button className="absolute left-4 text-white text-3xl" onClick={onPrev}>
        ‹
      </button>

      <div className="relative max-h-[90vh] max-w-[90vw]">
        <Image
          className="rounded-xl object-cover bg-textLightColor h-[75vh] w-full"
          loader={() => images[index]}
          src={images[index]}
          alt={"Listing gallery photo"}
          height={100}
          width={100}
          unoptimized
        />
      </div>

      <button className="absolute right-4 text-white text-3xl" onClick={onNext}>
        ›
      </button>
    </div>
  );
}

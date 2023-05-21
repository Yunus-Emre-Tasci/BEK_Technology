import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {images} from "../Data"
import Link from "next/link";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div className="relative w-full h-full mt-3 shadow-md">
      {images.map((image, index) => (
        <Link key={image.id} href="https://bek.org.tr/kuruluslar/bek-teknoloji" target="_blank" >
          <Image
            fill
            style={{ objectFit: "contain" }}
            src={image.src}
            alt={image.alt}
            className={`absolute transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>
      ))}
      <div
        onClick={previousSlide}
        className="cursor-pointer absolute left-0 top-[50%] px-1"
      >
        <AiOutlineArrowLeft />
      </div>
      <div
        onClick={nextSlide}
        className="cursor-pointer px-1 absolute right-0 top-[50%]"
      >
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default ImageSlider;

import Image from "next/image";
import React, { useState } from "react";

const ImageSlider = ({ images }) => {
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

  return (
    <div className="relative w-full max-w-lg">
      {images.map((image, index) => (
        <Image
          key={image.id}
          width={100}
          height={200}
          src={image.src}
          alt={image.alt}
          className={`absolute transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        className="absolute left-0 px-3 py-1 text-white transform -translate-y-1/2 bg-gray-800 top-1/2 rounded-l-md"
        onClick={previousSlide}
      >
        Previous
      </button>
      <button
        className="absolute right-0 px-3 py-1 text-white transform -translate-y-1/2 bg-gray-800 top-1/2 rounded-r-md"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;

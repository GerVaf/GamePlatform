import React, { useState } from "react";
import {
  PiArrowFatLineRightBold,
  PiArrowFatLineLeftBold,
} from "react-icons/pi";
import { RxDotFilled } from "react-icons/rx";

const CardSlide = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex =
      (currentIndex - 1 + item?.short_screenshots.length) %
      item?.short_screenshots.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % item?.short_screenshots.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[300px] sm:h-[600px] w-full py-5 relative group">
      <div
        style={{
          backgroundImage: `url(${item?.short_screenshots[currentIndex]?.image})`,
        }}
        className="w-full h-full bg-top bg-cover rounded-2xl duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <PiArrowFatLineLeftBold onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <PiArrowFatLineRightBold onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {item?.short_screenshots.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlide;

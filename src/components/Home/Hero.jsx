import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

import { AiFillWindows } from "react-icons/ai";
import { SiNintendogamecube } from "react-icons/si";
import { FaXbox, FaPlaystation, FaTruckLoading } from "react-icons/fa";

const Hero = ({ gameList }) => {
  console.log(gameList);
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      {gameList
        ?.filter((el) => el?.added > 7000)
        ?.map((img) => {
          return (
            <SwiperSlide className="group" key={img?.id}>
              <img
                className="w-[100vw] h-[100%] rounded-lg object-cover object-top"
                src={img?.background_image}
                alt=""
              />
              {/* animation  */}
              <div className=" transition-all duration-500 group-hover:translate-x-0 translate-x-[-500px] bottom-0 sm:w-[40%] w-[50%] flex flex-col justify-between  p-4 h-[100%] font-bold text-gray-100 card absolute">
                {/* titile and cate  */}
                <div className="flex flex-col gap-10">
                  <h1 className="text-xl border-b ">{img?.name}</h1>
                  <div className="flex gap-5 flex-wrap">
                    {img?.genres?.map((el) => {
                      return <p key={el.id}>{el.name}</p>;
                    })}
                  </div>
                </div>

                {/* price and platform  */}
                <div className="flex justify-between items-center ">
                  {/* price  */}
                  <p className="text-lg text-blue-800">
                    {img?.added < 8000 ? "Free" : `$ ${img?.metacritic}`}
                  </p>

                  {/* platform icon  */}
                  <div className="text-3xl flex gap-3">
                    {img?.parent_platforms.find((el) =>
                      el.platform.name.includes("PC")
                    ) && (
                      <AiFillWindows className=" hover:text-gray-300 transition-all duration-100" />
                    )}
                    {img?.parent_platforms.find((el) =>
                      el.platform.name.includes("Nintendo")
                    ) && (
                      <SiNintendogamecube className=" hover:text-gray-300 transition-all duration-100" />
                    )}
                    {img?.parent_platforms.find((el) =>
                      el.platform.name.includes("PlayStation")
                    ) && (
                      <FaPlaystation className=" hover:text-gray-300 transition-all duration-100" />
                    )}
                    {img?.parent_platforms.find((el) =>
                      el.platform.name.includes("Xbox")
                    ) && (
                      <FaXbox className=" hover:text-gray-300 transition-all duration-100" />
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Hero;

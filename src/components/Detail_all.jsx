import React from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";

import { AiFillWindows } from "../../node_modules/react-icons/ai";
import { FaXbox, FaPlaystation } from "../../node_modules/react-icons/fa";
import {
  SiNintendogamecube,
  SiScrollreveal,
} from "../../node_modules/react-icons/si";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import LazyLoad from "react-lazyload";
import Loading from "./Loading/Loading";
import DetailLoad from "./Loading/DetailLoad";
import ImgLoad from "./Loading/ImgLoad";

const Detail_all = () => {
  const gameDetail = useSelector((state) => state?.product.item);
  console.log(gameDetail);

  return (
    <>
      <div className="flex flex-col gap-16 overflow-hidden">
        {gameDetail.map((item) => {
          return (
            <div className="flex">
              <div className="w-11/12 flex flex-col gap-5 border-slate-500 border-b py-5">
                {/* top */}
                <div className=" flex text-white gap-5">
                  {/* left  */}
                  <div className="w-6/12 rounded-lg">
                    <div className="flex justify-center items-center bg-zinc-900 mx-10 h-[100%]">
                      <LazyLoad once placeholder={<DetailLoad />}>
                        <img
                          className=" w-[100%] h-96 object-top object-cover"
                          src={item?.background_image}
                          alt=""
                        />
                      </LazyLoad>
                    </div>
                  </div>

                  {/* right  */}
                  <div className="flex flex-col gap-5 w-6/12">
                    <p
                      className="text-xl font-bold
              "
                    >
                      {item?.name}
                    </p>

                    {/* platform  */}
                    <div className="flex text-xl gap-5">
                      {item?.parent_platforms.find((el) =>
                        el.platform.name.includes("PC")
                      ) && (
                        <AiFillWindows className=" hover:text-gray-300 transition-all duration-100" />
                      )}
                      {item?.parent_platforms.find((el) =>
                        el.platform.name.includes("Nintendo")
                      ) && (
                        <SiNintendogamecube className=" hover:text-gray-300 transition-all duration-100" />
                      )}
                      {item?.parent_platforms.find((el) =>
                        el.platform.name.includes("PlayStation")
                      ) && (
                        <FaPlaystation className=" hover:text-gray-300 transition-all duration-100" />
                      )}
                      {item?.parent_platforms.find((el) =>
                        el.platform.name.includes("Xbox")
                      ) && (
                        <FaXbox className=" hover:text-gray-300 transition-all duration-100" />
                      )}
                    </div>

                    {/* gametype */}
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-bold">GAME TYPE</p>
                      <div className="flex gap-3 px-3 py-1 rounded-sm mainbg">
                        {item?.genres.map((genr) => {
                          return (
                            <span
                              key={genr.id}
                              className="text-md border-r-2 px-3"
                            >
                              {genr.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* added customer */}
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-bold">ADDED CUSTOMER COUNT</p>
                      <span className="">{item?.added}</span>
                    </div>
                    {/* release date */}
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-bold"> RELEASE DATE</p>
                      <span className="">{item?.released}</span>
                    </div>

                    {/* last updated */}
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-bold"> RELEASE DATE</p>
                      <span className="">{item?.updated}</span>
                    </div>
                  </div>
                </div>

                {/* bottom  */}
                <div className="text-white flex flex-col gap-5">
                  {/* game hilight */}
                  <div className=" flex flex-col gap-2">
                    <p className="text-lg font-bold">GAME HILIGHT</p>
                    <Carousel
                      withIndicators
                      height={200}
                      slideSize="33.333333%"
                      slideGap="md"
                      loop
                      align="start"
                      slidesToScroll={3}
                      styles={{
                        control: {
                          color: "red",
                          borderBlockColor: "red",
                        },
                      }}
                    >
                      {item?.short_screenshots.map((dev) => {
                        return (
                          <Carousel.Slide>
                            <div className="flex justify-center bg-zinc-900 items-center h-[200px]">
                              <LazyLoad once placeholder={<DetailLoad />}>
                                <Image src={dev.image} />
                              </LazyLoad>
                            </div>
                          </Carousel.Slide>
                        );
                      })}
                    </Carousel>
                  </div>

                  {/* hilight and tags */}
                  <p className="text-lg font-bold">TAGS</p>
                  <p className="gap-5  flex justify-center items-center font-medium">
                    View to scroll <SiScrollreveal />
                  </p>

                  <div className="flex flex-col gap-5">
                    {/* tags */}
                    <div className=" flex flex-wrap h-32 gap-5  text-md overflow-y-scroll scrollbar-thumb-sky-600 scrollbar-thin scrollbar-track-slate-600">
                      {item?.tags.map((tag) => {
                        return (
                          <div className="flex justify-center items-center h-[100%]">
                            <button className="px-3 py-1 rounded-sm mainbg ">
                              {tag.name}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    {/* smiliar games */}
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-bold">SIMILAR GAMES</p>
                      <div className="flex gap-3 text-md">
                        <LazyLoad className="flex justify-center items-center w-[100%] h-72" once placeholder={<ImgLoad />}>
                          <Marquee
                            className="flex h-72 "
                            autoFill={true}
                            speed={70}
                            pauseOnHover={true}
                            gradientColor={false}
                          >
                            {item.tags?.map((hilight) => {
                              return (
                                <div
                                  key={hilight.id}
                                  className=" mx-2 flex  gap-3 font-bold"
                                >
                                  <div className="flex justify-center items-center h-[100%]">
                                    <img
                                      className=" h-56 object-cover rounded-md"
                                      src={hilight.image_background}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </Marquee>
                        </LazyLoad>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Detail_all;

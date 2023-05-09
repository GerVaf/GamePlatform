import React from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";

import { AiFillWindows } from "../../node_modules/react-icons/ai";
import { FaXbox, FaPlaystation } from "../../node_modules/react-icons/fa";
import {
  SiNintendogamecube,
  SiScrollreveal,
} from "../../node_modules/react-icons/si";

const Detail_all = () => {
  const gameDetail = useSelector((state) => state?.product.item);
  console.log(gameDetail);

  return (
    <>
      <div className="flex flex-col gap-16">
        {gameDetail.map((item) => {
          return (
            <div className="flex">
              <div className="w-11/12 flex flex-col gap-5 border-b-2 py-5">
                {/* top */}
                <div className=" flex text-white gap-5">
                  {/* left  */}
                  <div className="w-6/12 rounded-lg">
                    <img
                      className=" w-[100%] h-96 object-top object-cover"
                      src={item?.background_image}
                      alt=""
                    />
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
                  {/* smiliar games */}
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold">SIMILAR GAMES</p>
                    <div className="flex  gap-3  text-md">
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
                              <img
                                className=" h-56 object-cover rounded-md"
                                src={hilight.image_background}
                                alt=""
                              />
                            </div>
                          );
                        })}
                      </Marquee>
                    </div>
                  </div>

                  {/* hilight and tags */}
                  <p className="text-lg font-bold">GAME HILIGHT AND TAGS</p>
                  <p className="gap-5  flex justify-center items-center font-medium">
                    View to scroll <SiScrollreveal />
                  </p>

                  <div className="flex gap-5">
                    {/* tags */}
                    <div className="w-6/12 flex flex-wrap h-96 gap-5  text-md overflow-y-scroll scrollbar-thumb-sky-600 scrollbar-thin scrollbar-track-slate-600">
                      {item?.tags.map((tag) => {
                        return (
                          <button className="px-3 py-1 rounded-sm mainbg ">
                            {tag.name}
                          </button>
                        );
                      })}
                    </div>
                    {/* game hilight */}
                    <div className="w-6/12 flex flex-col gap-2">
                      <div className=" h-96 gap-5 flex flex-col text-md overflow-y-scroll scrollbar-thumb-sky-600 scrollbar-thin scrollbar-track-slate-600 ">
                        {item?.short_screenshots.map((dev) => {
                          return (
                            <div
                              className="flex shadow-md rounded-t-md flex-col gap-2 items-center"
                              key={dev.id}
                            >
                              <img
                                className=" object-top rounded-t-md w-[100%] h-96 object-cover"
                                src={dev.image}
                                alt=""
                              />
                            </div>
                          );
                        })}
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

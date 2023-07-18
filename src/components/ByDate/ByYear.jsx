import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import React from "react";
import Marquee from "react-fast-marquee";
import { AiFillWindows } from "react-icons/ai";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendogamecube, SiScrollreveal } from "react-icons/si";
import { useSelector } from "react-redux";
import { useGet2013_2014Query } from "../service/DataApi";

const ByYear = () => {
  const Data = useSelector(state=>console.log(state?.product?.dateByYear?.results));


  return (
    <div className="flex flex-col gap-16 overflow-hidden">
      {Data?.map((item) => {
        return (
          <div className="flex">
            <div className="w-11/12 flex flex-col gap-5 border-slate-500 border-b py-5">
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

             
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ByYear;

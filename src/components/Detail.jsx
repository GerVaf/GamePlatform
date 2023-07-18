import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { AiFillWindows } from "../../node_modules/react-icons/ai";
import { FaXbox, FaPlaystation } from "../../node_modules/react-icons/fa";
import {
  SiNintendogamecube,
  SiPandas,
} from "../../node_modules/react-icons/si";
import Trailer from "./Detail/Trailer";

const Detail = () => {
  const { slug } = useParams();
  // console.log(slug)
  const [gameData, setGameData] = useState(null);

  const DetailData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games/${slug}`,
        {
          params: {
            key: "64d7c2e284ce406abb26e55182fdf488",
          },
        }
      );
      setGameData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    DetailData();
  }, []);
  console.log(gameData);
  return (
    <>
      <div className="flex">
        {/* right side  */}
        <div className="sm:w-12/12 overflow-hidden w-[100vw] flex flex-col gap-5">
          {/* top */}
          <div className=" flex flex-col sm:flex-row text-white gap-5">
            {/* left  */}
            <div className="sm:w-[50%] rounded-lg">
              <img
                className=" sm:w-[100%] w-[100vw] sm:h-96 object-top object-cover"
                src={gameData?.background_image}
                alt=""
              />
            </div>

            {/* right  */}
            <div className="sm:w-[50%] w-[100%] flex flex-col gap-5 ">
              <p
                className="sm:text-xl font-bold
              "
              >
                {gameData?.name_original}
              </p>

              {/* platform  */}
              <div className="flex sm:text-xl gap-5">
                {gameData?.parent_platforms.find((el) =>
                  el.platform.name.includes("PC")
                ) && (
                  <AiFillWindows className=" hover:text-gray-300 transition-all duration-100" />
                )}
                {gameData?.parent_platforms.find((el) =>
                  el.platform.name.includes("Nintendo")
                ) && (
                  <SiNintendogamecube className=" hover:text-gray-300 transition-all duration-100" />
                )}
                {gameData?.parent_platforms.find((el) =>
                  el.platform.name.includes("PlayStation")
                ) && (
                  <FaPlaystation className=" hover:text-gray-300 transition-all duration-100" />
                )}
                {gameData?.parent_platforms.find((el) =>
                  el.platform.name.includes("Xbox")
                ) && (
                  <FaXbox className=" hover:text-gray-300 transition-all duration-100" />
                )}
              </div>

              <p className=" sm:h-72 h-44 overflow-y-scroll scrollbar-thumb-sky-600 scrollbar-thin scrollbar-track-slate-600">
                {gameData?.description_raw}
              </p>
            </div>
          </div>

          {/* bottom  */}
          <div className="text-white flex flex-col gap-5">
            {/* gametype */}
            <div className="flex flex-col gap-2">
              <p className="sm:text-lg font-bold">GAME TYPE</p>
              <div className="flex flex-wrap justify-start items-center gap-3 px-3 py-1 rounded-sm mainbg">
                {gameData?.genres.map((genr) => {
                  return (
                    <span
                      key={genr.id}
                      className="sm:text-md border-r-2 px-1 sm:text-md text-[10px] sm:px-3"
                    >
                      {genr.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* added customer */}
            <div className="flex flex-col gap-2">
              <p className="sm:text-lg font-bold">ADDED CUSTOMER COUNT</p>
              <span className="sm:text-md text-[10px]">{gameData?.added}</span>
            </div>

            {/* avaiable platform  */}
            <div className="flex flex-col gap-2">
              <p className="sm:text-lg font-bold">SIMILAR GAMES</p>
              <div className="flex  gap-3  text-md">
                <Trailer stores={gameData?.stores} />
              </div>
            </div>

            {/* game developer */}
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">GAME DEVELOPER & HISTORY</p>
              <div className="flex flex-wrap gap-3  text-md">
                {gameData?.developers.map((dev) => {
                  return (
                    <div
                      className="flex sm:h-48 h-32 rounded-t-md flex-col gap-2 bg-zinc-800 font-bold text-slate-200 items-center"
                      key={dev.id}
                    >
                      <img
                        className="  rounded-t-md w-[100%] h-24 sm:h-36 object-cover"
                        src={dev.image_background}
                        alt=""
                      />
                      <p className="text-[10px] sm:text-md">{dev.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* tags */}
            <div className="flex gap-3 flex-wrap mb-24">
              {gameData?.tags.map((tag) => {
                return (
                  <button className="px-3 py-1 text-[10px] sm:text-md rounded-sm mainbg ">
                    {tag.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

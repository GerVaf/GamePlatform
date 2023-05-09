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
        <div className="w-12/12 flex flex-col gap-5">
          {/* top */}
          <div className=" flex text-white gap-5">
            {/* left  */}
            <div className="w-6/12 rounded-lg">
              <img
                className=" w-[100%] h-96 object-top object-cover"
                src={gameData?.background_image}
                alt=""
              />
            </div>

            {/* right  */}
            <div className="flex flex-col gap-5 w-6/12">
              <p
                className="text-xl font-bold
              "
              >
                {gameData?.name_original}
              </p>

              {/* platform  */}
              <div className="flex text-xl gap-5">
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

              <p className=" h-72 overflow-y-scroll scrollbar-thumb-sky-600 scrollbar-thin scrollbar-track-slate-600">
                {gameData?.description_raw}
              </p>
            </div>
          </div>

          {/* bottom  */}
          <div className="text-white flex flex-col gap-5">
            {/* gametype */}
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">GAME TYPE</p>
              <div className="flex gap-3 px-3 py-1 rounded-sm mainbg">
                {gameData?.genres.map((genr) => {
                  return (
                    <span key={genr.id} className="text-md border-r-2 px-3">
                      {genr.name}
                    </span>
                  );
                })}
              </div>
            </div>
            
            {/* added customer */}
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-bold">ADDED CUSTOMER COUNT</p>
                  <span className="">{gameData?.added}</span>
                </div>

            {/* avaiable platform  */}
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">SIMILAR GAMES</p>
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
                    <div className="flex h-48 rounded-t-md flex-col gap-2 bg-white font-bold text-slate-600 items-center" key={dev.id}>
                      <img
                        className="  rounded-t-md w-[100%] h-36 object-cover"
                        src={dev.image_background}
                        alt=""
                        />
                        <p>{dev.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* tags */}
            <div className="flex gap-3 flex-wrap">
              {gameData?.tags.map((tag) => {
                return (
                  <button className="px-3 py-1 rounded-sm mainbg ">
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

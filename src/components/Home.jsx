import React, { useEffect, useState } from "react";
import Items from "./Home/Items";
import Hero from "./Home/Hero";
import SlideMenu from "./Home/SlideMenu";
import PopularSlide from "./Home/PopularSlide";
import GlassCard from "./Home/GlassCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSelector } from "react-redux";

const Home = () => {
  const Games = useSelector((state) => state.product.item);
  const [gameList, setGameList] = useState([]);
  useEffect(() => {
    setGameList(Games);
  }, [gameList]);
  const [searchTerm, setSearchTerm] = useState(null);
  // console.log(searchTerm);
  // console.log(gameList);
  const [parent] = useAutoAnimate();
  
  return (
    <div className="sm:flex sm:flex-col justify-center sm:gap-5">
      {/* top */}
      <div className="flex sm:flex-row flex-col gap-5 sm:h-[90vh]">
        {/* left Hero and slide  */}
        <div className="sm:w-8/12 flex flex-col">
          {/* <Hero /> */}
          <PopularSlide />
        </div>
        {/* right glass autoslide  */}
        <div className="sm:w-4/12 hidden lg:block overflow-hidden">
          <p className="text-white font-bold text-xl mb-3">
            YOU CAN GET DOWN FREE
          </p>
          <div className=" select-none scrollbar-thin overflow-scroll ">
            <GlassCard />
          </div>
        </div>
      </div>
      {/* bottom  */}
      <div className="sm:flex sm:gap-5">
        <SlideMenu
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          gameList={gameList}
        />
        <div className="text-white">
          <p className="font-bold sm:text-xl py-2 my-3">
            CHOSE YOUR GAME TO PLAY
          </p>
          <div
            ref={parent}
            className=" scroll-smooth overflow-y-scroll scrollbar-thumb-sky-600 scrollbar-thin scrollbar-track-slate-600 w-[100vw] sm:w-[100vh] lg:w-[100vh]  h-[50vh] sm:h-[50vh]"
          >
            {gameList
              ?.filter((product) => {
                if (searchTerm != null) {
                  const filterGame = product?.genres.map((el) => el.id);
                  // console.log(product);
                  return filterGame.includes(searchTerm);
                } else {
                  return gameList;
                }
              })
              ?.map((cd) => {
                return <Items key={cd.id} item={cd} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

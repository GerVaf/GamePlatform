import React, { useEffect, useState } from "react";
import Items from "./Home/Items";
import Hero from "./Home/Hero";
import SlideMenu from "./Home/SlideMenu";
import PopularSlide from "./Home/PopularSlide";
import GlassCard from "./Home/GlassCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSelector } from "react-redux";
import Box from "./Home/Box";

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
    <div className="sm:flex sm:flex-col justify-center sm:gap-5 overflow-hidden">
      {/* top */}
      <div className="flex sm:flex-row flex-col gap-5 h-[90vh] scrollbar-none">
        {/* left Hero and slide  */}
        <div className="sm:w-8/12 hidden sm:flex flex-col gap-5">
          <Hero gameList={gameList} />
          <PopularSlide />
        </div>
        {/* right glass autoslide  */}
        <div className="sm:w-4/12 px-5 sm:px-0 overflow-hidden">
          <p className="text-white font-bold text-xl mb-3">
            YOU CAN GET DOWN FREE
          </p>
          <div className=" select-none scrollbar-thin overflow-scroll ">
            <GlassCard />
          </div>
        </div>
      </div>
      {/* bottom  */}

      <div className="flex flex-col">
        <p className="font-bold text-white sm:text-xl py-2 my-3">
          CHOSE YOUR GAME TO PLAY
        </p>
        <div className="sm:flex sm:flex-row flex flex-col gap-5 ">
          <div className="sm:flex gap-5 sm:w-8/12">
            <SlideMenu
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              gameList={gameList}
            />
            <div className="text-white flex flex-col items-center">
              <div
                ref={parent}
                className=" scroll-smooth overflow-y-scroll scrollbar-thumb-sky-600 scrollbar-thin scrollbar-track-slate-600 w-[90vw] sm:w-[100vw] lg:w-[100vh]  h-[50vh] sm:h-[50vh]"
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
          <div className="sm:w-4/12 sm:pb-10 px-5">
            <Box />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

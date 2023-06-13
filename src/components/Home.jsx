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
    <div className="sm:flex justify-center sm:gap-5">
      {/* middleMenu */}
      <div className=" sm:w-10/12 sm:flex sm:h-[150vh] sm:flex-col ">
        <Hero />
        <PopularSlide />
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
              className=" scroll-smooth overflow-y-scroll scrollbar-thumb-sky-600 scrollbar-thin scrollbar-track-slate-600 w-[100vw] sm:w-[50vw] lg:w-[60vw] h-[50vh] sm:h-[70vh]"
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

      {/* right menu */}
      <div className=" hidden lg:block sm:w-4/12 sm:h-[140vh] overflow-hidden">
        <p className="text-white font-bold text-xl mb-3">
          YOU CAN GET DOWN FREE
        </p>
        <div className=" select-none scrollbar-thin overflow-scroll ">
          <GlassCard />
        </div>
      </div>
    </div>
  );
};

export default Home;

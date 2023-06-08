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
    <div className="flex  gap-10">
      {/* middleMenu */}
      <div className=" w-8/12 flex h-[150vh] flex-col gap-10 ">
        <Hero />
        <PopularSlide />
        <div className="flex gap-5">
          <SlideMenu
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            gameList={gameList}
          />
          <div className="text-white ">
            <p className="font-bold text-xl mb-3">CHOSE YOUR GAME TO PLAY</p>
            <div
              ref={parent}
              className=" scroll-smooth overflow-y-scroll scrollbar-thumb-sky-600 scrollbar-thin scrollbar-track-slate-600 w-[50vw] h-[55vh]"
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
      <div className="w-4/12 h-[150vh] overflow-hidden">
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

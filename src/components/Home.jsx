import React from "react";
import Items from "./Home/Items";
import Hero from "./Home/Hero";
import SlideMenu from "./Home/SlideMenu";
import PopularSlide from "./Home/PopularSlide";
import GlassCard from "./Home/GlassCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../data/productsSlice";
import axios from "axios";

const Home = () => {
  const Games = useSelector((state) => state.product.item);
  const dispatch = useDispatch();
  const FetchingData = async () => {
    const { data } = await axios.get(
      "https://api.rawg.io/api/games?key=64d7c2e284ce406abb26e55182fdf488&dates=2019-09-01,2022-09-30&platforms=18,1,7"
    );
    const games = data?.results;
    console.log(games);
    dispatch(addProducts(games));
  };
  // console.log(Games);
  useEffect(() => {
    FetchingData();
  }, []);
  return (
    <div className="flex  gap-16">
      {/* middleMenu */}
      <div className=" w-8/12 flex flex-col gap-10 ">
        <Hero />
        <PopularSlide />
        <div className="flex gap-5">
          <SlideMenu />
          <div className="text-white ">
            <p className="font-bold text-xl mb-3">CHOSE YOUR GAME TO PLAY</p>
            <div className="flex flex-wrap justify-center gap-5 overflow-y-scroll scrollbar-thumb-sky-600 scrollbar-thin scrollbar-track-slate-600  h-[80vh]">
              {Games.map((cd) => {
                return <Items key={cd.id} item={cd} />;
              })}
            </div>
          </div>
        </div>
      </div>

      {/* right menu */}
      <div className="w-4/12 h-[170vh] overflow-hidden">
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

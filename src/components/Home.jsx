import React from "react";
import Items from "./Home/Items";
import Hero from "./Home/Hero";
import Menu from "./Home/Menu";
import SlideMenu from "./Home/SlideMenu";
import PopularSlide from "./Home/PopularSlide";
import GlassCard from "./Home/GlassCard";

import { gameApi } from "../data/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../data/productsSlice";

const Home = () => {
  const Games = useSelector((state) => state.product.item);
  const dispatch = useDispatch();
  const FetchingData = async () => {
    const { results } = await gameApi(
      "dates=2019-09-01,2023-01-30&platforms=18,1,7"
    );
    // console.log(results)
    dispatch(addProducts(results));
  };
    // console.log(Games);
    useEffect(() => {
      FetchingData();
    }, []);
  return (
    <div className="flex  gap-16">
      {/* left Menu  */}
      <div className=" w-1/12 h-[145vh] items-center flex mr-5 justify-center border-r border-gray-600">
        <Menu />
      </div>

      {/* middleMenu */}
      <div className=" w-7/12 flex flex-col gap-10 ">
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

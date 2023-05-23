import React from "react";
import hero from "../../data/img/hero.png";
const Hero = () => {
  return (
    <div className="mainbg rounded-[50px] justify-between flex text-white font-bold items-center p-10 h-[400px] ">
      <div className="w-2/4 flex flex-col gap-7">
        <div>
          <span className="bg-gradient-to-r rounded-lg from-red-500 to-rose-600 p-2 ">
            NEW
          </span>
        </div>
        <p className="text-3xl">
          Valorant 5Vs5 Challenge : <br />
          Myles Marales
        </p>
        <div className="p-2  flex items-center justify-between w-[300px] card rounded-[25px]">
          <button className="py-6 px-7 rounded-[25px] bg-gradient-to-r shadow-blue-500/50 shadow-lg from-cyan-400 to-blue-500 text-white">$150</button>
          <button className="hover:bg-blue-500 transition-opacity duration-300 py-6 px-7 rounded-[25px]">Purchese</button>
        </div>
      </div>
      <div className="w-2/4 flex justify-center">
        <img className=" w-2/2" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;

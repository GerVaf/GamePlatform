import React from "react";
import ReactPlayer from "react-player";
import hero from "../../data/img/hero.png";
import video from "../../data/img/cyberpunk.mp4";
const Hero = () => {
  return (
    // <div className="mainbg rounded-[50px] justify-between flex text-white font-bold items-center p-10 h-[400px] ">
    //   <div className="w-2/4 flex flex-col gap-7">
    //     <div>
    //       <span className="bg-gradient-to-r rounded-lg from-red-500 to-rose-600 p-2 ">
    //         NEW
    //       </span>
    //     </div>
    //     <p className="text-3xl">
    //       Valorant 5Vs5 Challenge : <br />
    //       Myles Marales
    //     </p>
    //     <div className="p-2  flex items-center justify-between w-[300px] card rounded-[25px]">
    //       <button className="py-6 px-7 rounded-[25px] bg-gradient-to-r shadow-blue-500/50 shadow-lg from-cyan-400 to-blue-500 text-white">$150</button>
    //       <button className="hover:bg-blue-500 transition-opacity duration-300 py-6 px-7 rounded-[25px]">Purchese</button>
    //     </div>
    //   </div>
    //   <div className="w-2/4 flex justify-center">
    //     <img className=" w-2/2" src={hero} alt="" />
    //   </div>
    // </div>
    <>
      <div className="flex gap-5 items-center lg:justify-around justify-center h-[50vh] my-10 text-white">
        <div className="h-[100%] w-8/12 relative">
          <div className="video-cuz h-[100%] w-[100%] z-20 absolute"></div>
          <div className="z-10 h-[100%] w-[100%]">
            <ReactPlayer
              volume={0.5}
              loop={true}
              stopOnUnmount={true}
              url={video}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
        <div className="flex w-4/12 flex-col justify-between gap-x-0  lg:gap-x-5">
          <div className="lg:block flex">
            <h1 className="font-bold text-xl">CyberPunk</h1>
            <p className="font-semibold text-lg ml-5 mb-5">
              <span className="text-red-600">New</span> Release
            </p>
          </div>
          <div className="">
            <div className="flex flex-col  gap-y-2 mb-3">
              <div className="lg:block flex items-center">
                <h2 className="font-semibold text-lg">GAME TYPE : </h2>
                <span className="text-red-500 ml-10 text-sm font-semibold">
                  ACTION ADVENTURE RPG
                </span>
              </div>
              <div className="lg:block flex items-center">
                <span className="font-semibold text-lg">ADDED COUNT : </span>
                <br />
                <span className="text-red-500 ml-10 text-sm font-semibold">
                  1135
                </span>
              </div>
              <div className="lg:block flex items-center">
                <span className="font-semibold text-lg ">
                  AVAIABLE PLATFORM :{" "}
                </span>
                <br />
                <span className="text-red-500 text-sm font-semibold">
                  PC PLAYSTATION X-BOX
                </span>
              </div>
            </div>
          </div>
          <button className=" bottom-0 bg-gradient-to-r hover:shadow-rose-800/100 shadow-red-500/50 shadow-lg from-rose-500 to-red-600 hover:from-rose-400 hover:to-rose-600 text-white p-2 rounded-md text-sm">
            ADD TO CART AND PLAY NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;

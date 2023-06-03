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
      <div className="flex video-cuz z-20 text-white w-[100%] object-cover">
        <ReactPlayer
          volume={0.5}
          loop={true}
          stopOnUnmount={true}
          url={video}
          width="60%"
          height="100%"
          playing={true}
          controls
        />
        <div className="ml-10 flex flex-col justify-between gap-5">
          <h1 className="font-bold text-xl">CyberPunk</h1>
          <div className="ml-10">
            <p className="font-bold text-lg mb-5">
              <span className="text-red-600">New</span> Release
            </p>
            <div className="flex flex-col gap-5 ">
              <p>
                <span className="font-bold text-MD ml-5">GAME TYPE : </span>
                <br />
                <span className="text-red-500 ml-10 text-sm font-bold">
                  ACTION ADVENTURE RPG
                </span>
              </p>
              <p>
                <span className="font-bold text-MD ml-5">ADDED COUNT : </span>
                <br />
                <span className="text-red-500 ml-10 text-sm font-bold">
                  1135
                </span>
              </p>
              <p>
                <span className="font-bold text-MD ml-5">AVAIABLE PLATFORM : </span>
                <br />
                <span className="text-red-500 ml-10 text-sm font-bold">
                  PC  PLAYSTATION X-BOX
                </span>
              </p>
            </div>
          </div>
          <button className=" bottom-0 bg-gradient-to-r hover:shadow-rose-800/100 shadow-red-500/50 shadow-lg from-rose-500 to-red-600 hover:from-rose-400 hover:to-rose-600 text-white px-3 py-3 rounded-md text-sm">
            ADD TO CART AND PLAY NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;

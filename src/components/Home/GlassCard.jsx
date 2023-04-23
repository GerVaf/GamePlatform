import React from "react";
import { useSelector } from "react-redux";
import { MdGroups } from "../../../node_modules/react-icons/md";
import { AiFillEye } from "../../../node_modules/react-icons/ai";
import "./GlassCard.css";

const GlassCard = () => {
  const CardData = useSelector((state) =>
    state?.product.item.filter((el) => el.added < 7000)
  );
  console.log(CardData);
  return (
    <>
      <div className=" marquee flex flex-col justify-center items-center gap-5">
        {CardData.map((card) => {
          return (
            <div className=" w-[20vw] p-4 mainbg rounded-3xl flex text-gray-300 gap-5">
              <img
                className=" rounded-3xl w-40 object-cover"
                src={card.background_image}
                alt=""
              />
              <div className="flex flex-col gap-2 justify-start">
                <div>
                  <span className=" text-sky-500 font-extrabold px-4 py-1 card rounded-2xl">
                    shooter
                  </span>
                </div>
                <h2 className="font-bold">{card.name}</h2>
                <div className="flex text-white gap-5 text-xl">
                  <div className="flex gap-1">
                    <AiFillEye />
                    <p className="text-sm">{card.added_by_status.playing}k</p>
                  </div>
                  <div className="flex gap-1">
                    <MdGroups />
                    <p className="text-sm">{card.added_by_status.owned}k</p>
                  </div>
                </div>
                <div>
                  <button className=" btn text-sm font-bold px-5 py-3 rounded-xl">
                    FREE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {CardData.map((card) => {
          return (
            <div className=" w-[20vw] p-4 mainbg rounded-3xl flex text-gray-300 gap-5">
              <img
                className=" rounded-3xl w-40 object-cover"
                src={card.background_image}
                alt=""
              />
              <div className="flex flex-col gap-2 justify-start">
                <div>
                  <span className=" text-sky-500 font-extrabold px-4 py-1 card rounded-2xl">
                    shooter
                  </span>
                </div>
                <h2 className="font-bold">{card.name}</h2>
                <div className="flex text-white gap-5 text-xl">
                  <div className="flex gap-1">
                    <AiFillEye />
                    <p className="text-sm">{card.added_by_status.playing}k</p>
                  </div>
                  <div className="flex gap-1">
                    <MdGroups />
                    <p className="text-sm">{card.added_by_status.owned}k</p>
                  </div>
                </div>
                <div>
                  <button className=" btn text-sm font-bold px-5 py-3 rounded-xl">
                    FREE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GlassCard;

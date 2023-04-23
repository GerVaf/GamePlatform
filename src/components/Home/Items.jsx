import React from "react";
import {BsCartPlus} from "../../../node_modules/react-icons/bs"
import { AiFillWindows, AiFillHeart } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";
import { SiNintendogamecube } from "react-icons/si";
import { FaXbox, FaPlaystation } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems, removeFromCart } from "../../data/productsSlice";
import { useState } from "react";
const ItemByDate = ({ item }) => {
  const dispatch = useDispatch(); 
  const [buy,setBuy]= useState(item.tba)
  return (
    <>
      <div className=" group relative overflow-hidden rounded-md">
        <div className=" text-2xl">
          <button className="absolute top-2 left-3">
            <AiFillHeart />
          </button>
          {buy ? 
          <button
            onClick={() =>[setBuy(!buy) ,dispatch(removeFromCart(item))]}
            className="absolute text-rose-600 top-2 right-3"
          >
            <BsCartPlus />
          </button>
          :
          <button
            onClick={() =>[setBuy(!buy) ,dispatch(addItems(item))]}
            className="absolute top-2 right-3"
          >
            <RiShoppingCartFill />
          </button>}
          
        </div>
        <img
          className=" rounded-md w-52 h-60 object-cover"
          src={item.background_image}
          alt=""
        />
        <div className=" transition-all duration-500 group-hover:translate-y-0 translate-y-96 bottom-0 w-52 flex flex-col justify-around p-4 h-2/4 font-bold text-gray-100 card absolute">
          <p className="mb-3 text-sm">{item.name}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg">
              {item.added < 7000 ? "Free" : `$${item.metacritic}`}{" "}
            </p>
            <div className="text-2xl mb-3 flex flex-col gap-3">
              <div className="flex gap-3">
                {item.parent_platforms.find((el) =>
                  el.platform.name.includes("PC")
                ) && (
                  <AiFillWindows className=" hover:text-gray-300 transition-all duration-100" />
                )}
                {item.parent_platforms.find((el) =>
                  el.platform.name.includes("Nintendo")
                ) && (
                  <SiNintendogamecube className=" hover:text-gray-300 transition-all duration-100" />
                )}
              </div>
              <div className="flex gap-3">
                {item.parent_platforms.find((el) =>
                  el.platform.name.includes("PlayStation")
                ) && (
                  <FaPlaystation className=" hover:text-gray-300 transition-all duration-100" />
                )}
                {item.parent_platforms.find((el) =>
                  el.platform.name.includes("Xbox")
                ) && (
                  <FaXbox className=" hover:text-gray-300 transition-all duration-100" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemByDate;

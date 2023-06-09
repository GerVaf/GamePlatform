import React from "react";
import { addItems, removeFromCart } from "../../data/productsSlice";
import { MdGroups } from "../../../node_modules/react-icons/md";
import { AiFillEye } from "../../../node_modules/react-icons/ai";
import { BsCartPlus } from "../../../node_modules/react-icons/bs";
import { RiShoppingCartFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import "./GlassCard.css";
import { Card } from "@mantine/core";

const CarouselCard = (props) => {
  const { id, background_image, genres, name, slug , added_by_status } = props;
  const isAdded = useSelector((state) => state?.product.cart);
  // console.log(CardData);
    // console.log(isAdded);
  const dispatch = useDispatch();
  return (
    <div key={id} className=" p-3 mainbg rounded-3xl flex text-gray-300 gap-5">
      <img
        className=" rounded-2xl w-28 object-cover"
        src={background_image}
        alt=""
      />
      <div className="flex  flex-col gap-y-2 justify-start">
        <div>
          <span className=" text-sky-500 font-extrabold px-3 py-1 card rounded-2xl">
            {genres[0]?.slug}
          </span>
        </div>
        <div className="">
          <h2 className=" font-bold">{name}</h2>
        </div>
        <div className="flex text-white gap-x-5 text-xl">
          <div className="flex gap-1">
            <AiFillEye />
            <p className="text-xs">{added_by_status.playing}k</p>
          </div>
          <div className="flex gap-1">
            <MdGroups />
            <p className="text-xs">{added_by_status.owned}k</p>
          </div>
        </div>
        <div>
          {isAdded?.find((el) => el?.slug == slug) ? 
          (
            <button
              onClick={() => dispatch(removeFromCart(props))}
              className="flex items-center  text-rose-600 top-2 right-3"
            >
              <p className="mr-5">FREE</p>
              <BsCartPlus />
            </button>
          ) : (
            <button
              onClick={() => dispatch(addItems(props))}
              className="flex items-center hover:text-rose-500 duration-150 transition top-2 right-3"
            >
              <p className="mr-5">FREE</p>
              <RiShoppingCartFill />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;

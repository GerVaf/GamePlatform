import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdGroups } from "../../../node_modules/react-icons/md";
import { AiFillEye } from "../../../node_modules/react-icons/ai";
import "./GlassCard.css";
import { addItems, removeFromCart } from "../../data/productsSlice";

import { BsCartPlus } from "../../../node_modules/react-icons/bs";
import { RiShoppingCartFill } from "react-icons/ri";

const GlassCard = () => {
  const CardData = useSelector((state) =>
    state?.product.item.filter((el) => el.added < 14100)
  );
  const isAdded = useSelector((state) => state?.product.cart);
  console.log(CardData);
  const dispatch = useDispatch();

  return (
    <>
      <div className=" marqe flex flex-col gap-5">
        {CardData.map((card) => {
          return (
            <div className=" w-96 p-4 mainbg rounded-3xl flex text-gray-300 gap-5">
              <img
                className=" rounded-3xl w-40 object-cover"
                src={card.background_image}
                alt=""
              />
              <div className="flex flex-col gap-2 justify-start">
                <div>
                  <span className=" text-sky-500 font-extrabold px-4 py-1 card rounded-2xl">
                    {card.genres[0]?.slug}
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
                  {isAdded?.find((el) => el.slug == card.slug) ? (
                    <button
                      onClick={() => dispatch(removeFromCart(card))}
                      className="flex items-center  text-rose-600 top-2 right-3"
                    >
                      <p className="mr-5">FREE</p><BsCartPlus />
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(addItems(card))}
                      className="flex items-center hover:text-rose-500 duration-150 transition top-2 right-3"
                    >
                      <p className="mr-5">FREE</p><RiShoppingCartFill />
                    </button>
                  )}
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

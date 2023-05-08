import React from "react";
import { BsCartPlus } from "../../../node_modules/react-icons/bs";
import { AiFillWindows } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { RiShoppingCartFill } from "react-icons/ri";
import { SiNintendogamecube } from "react-icons/si";
import { FaXbox, FaPlaystation } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeFromCart } from "../../data/productsSlice";
import { Link } from "react-router-dom";

const ItemByDate = ({ item }) => {
  const isAdded = useSelector((state) => state?.product.cart);
  console.log(isAdded);
  const dispatch = useDispatch();

  return (
    <>
      <div className=" group relative overflow-hidden rounded-md">
        <div className=" text-2xl">
          <Link to={`/detail/${item.slug}`}>
            <button className=" hover:text-rose-600 absolute top-2 left-3">
              <TbListDetails />
            </button>
          </Link>
          {isAdded?.find((el) => el.slug == item.slug) ? (
            <button
              onClick={() => dispatch(removeFromCart(item))}
              className="absolute text-rose-600 top-2 right-3"
            >
              <BsCartPlus />
            </button>
          ) : (
            <button
              onClick={() => dispatch(addItems(item))}
              className="absolute hover:text-rose-500 duration-150 transition top-2 right-3"
            >
              <RiShoppingCartFill />
            </button>
          )}
        </div>

        <img
          className=" rounded-md w-52 h-60 object-cover"
          src={item.background_image}
          alt=""
        />
        <div className=" transition-all duration-500 group-hover:translate-y-0 translate-y-96 bottom-0 w-52 flex flex-col justify-around p-4 h-2/4 font-bold text-gray-100 card absolute">
          <p className="mb-3 text-sm">{item.name}</p>
          <div className="flex justify-between items-center">
            {/* price  */}
            <p className="text-lg">
              {item.added < 14100 ? "Free" : `$${item.metacritic}`}{" "}
            </p>

            {/* platform icon  */}
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

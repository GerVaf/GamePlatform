
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { AiFillWindows } from "../../../node_modules/react-icons/ai";
import { SiNintendogamecube } from "../../../node_modules/react-icons/si";
import { FaPlaystation, FaXbox } from "../../../node_modules/react-icons/fa";
import { TbListDetails } from "../../../node_modules/react-icons/tb";
import { RiShoppingCartFill } from "../../../node_modules/react-icons/ri";
import { BsCartPlus } from "../../../node_modules/react-icons/bs";
import { Link } from "react-router-dom";
import {
  LuArrowBigLeftDash,
  LuArrowBigRightDash,
} from "../../../node_modules/react-icons/lu";

import { addItems, removeFromCart } from "../../data/productsSlice";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import { useEffect } from "react";
import "./slide.css"
const PopularSlide = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const SlideData = useSelector((state) => state?.product.item);
  // console.log(SlideData);
  const PopularGame = SlideData?.filter((el) => el.added > 4100);
  // console.log(PopularGame);
  const isAdded = useSelector((state) => state?.product.cart);
  // console.log(isAdded);
  const dispatch = useDispatch();

  // for pagination

  // State to store the current itemsPerPage value
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Effect to update itemsPerPage based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(PopularGame.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = PopularGame.slice(startIndex, startIndex + itemsPerPage);
  const [parent, enableAnimations] = useAutoAnimate();
  return (
    <>
      <div className="text-white  font-bold flex flex-col gap-5">
        {/* controller and title  */}
        <div className=" text-xl flex sm:flex-row gap-5 sm:gap-0 flex-col justify-between sm:items-center">
          <p>NEWEST GAMES</p>
          <div className="flex gap-3 text-md justify-end items-center">
            <p className="text-sm">View all</p>
            <button
              className="w-10 sm:h-10  h-6 bg-gray-400 flex justify-center items-center rounded-full bg-gradient-to-r shadow-blue-500/60 shadow-lg hover:from-cyan-400 hover:to-blue-600 from-cyan-400 to-blue-500"
              onClick={() =>
                handlePageChange(
                  (currentPage - 1 + totalPages) % totalPages // Move to previous page with wrap-around
                )
              }
            >
              <LuArrowBigLeftDash />
            </button>
            <button
              className="w-10 sm:h-10  h-6 bg-gray-400 flex justify-center items-center rounded-full bg-gradient-to-r shadow-blue-500/60 shadow-lg hover:from-cyan-400 hover:to-blue-600 from-cyan-400 to-blue-500"
              onClick={
                () => handlePageChange((currentPage + 1) % totalPages) // Move to next page with wrap-around
              }
            >
              <LuArrowBigRightDash />
            </button>
          </div>
        </div>
        {/* card and animation */}
        <div ref={parent} className="flex justify-center gap-5 select-none">
          {visibleItems.map((el) => (
            <div
              key={el.id}
              className="flex bg-gradient-to-r to-gray-500 from-zinc-800  hover:bg-gradient-to-r hover:to-gray-600 hover:from-zinc-900 rounded-lg items-center w-12/12 sm:w-3/12 h-80 flex-col"
            >
              <img
                className="sm:w-[100%] w-80 h-[50%] object-cover rounded-t-lg"
                src={el?.background_image}
                alt=""
              />
              <div className="w-[100%] px-5 flex flex-col text-sm justify-around h-[50%]">
                <p className="py-1 flex justify-center rounded-md bg-gradient-to-r shadow-red-500/90 shadow-md hover:from-rose-400 hover:to-red-600 from-rose-400 to-red-500 text-white">
                  NEW GAME
                </p>
                <p>{el?.name}</p>
                <div className="flex justify-between items-center">
                  <span>${el?.reviews_text_count}</span>
                  <div className="flex justify-center items-center gap-5 text-xl">
                    <button className=" hover:text-rose-600">
                      <Link to={`/detail/${el.slug}`}>
                        <BsCartPlus />
                      </Link>
                    </button>
                    {Array.isArray(isAdded) &&
                    isAdded.find((item) => item.slug === el.slug) ? (
                      <button
                        onClick={() => dispatch(removeFromCart(el))}
                        className="text-rose-600 top-2 right-3"
                      >
                        <BsCartPlus />
                      </button>
                    ) : (
                      <button
                        onClick={() => dispatch(addItems(el))}
                        className="hover:text-rose-500 duration-150 transition top-2 right-3"
                      >
                        <RiShoppingCartFill />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default PopularSlide;

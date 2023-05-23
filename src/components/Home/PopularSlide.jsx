import React from "react";
import { Carousel } from "@mantine/carousel";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "@mantine/core";

import { AiFillWindows } from "../../../node_modules/react-icons/ai";
import { SiNintendogamecube } from "../../../node_modules/react-icons/si";
import { FaPlaystation, FaXbox } from "../../../node_modules/react-icons/fa";
import { TbListDetails } from "../../../node_modules/react-icons/tb";
import { RiShoppingCartFill } from "../../../node_modules/react-icons/ri";
import { BsCartPlus } from "../../../node_modules/react-icons/bs";
import { Link } from "react-router-dom";
import { addItems, removeFromCart } from "../../data/productsSlice";

const PopularSlide = () => {
  const SlideData = useSelector((state) => state?.product.item);
  // console.log(SlideData);
  const PopularGame = SlideData?.filter((el) => el.added > 4100);
  // console.log(PopularGame)
  const isAdded = useSelector((state) => state?.product.cart);
  // console.log(isAdded);
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-white text-xl font-bold flex flex-col gap-5">
        <p>NEWEST GAMES</p>
        <div>
          <Carousel
            slideSize="70%"
            height={350}
            slideGap="md"
            loop
            dragFree
            withControls={false}
            withIndicators
          >
            {PopularGame.map((item) => {
              return (
                <Carousel.Slide key={item.id}>
                  <div className=" group h-3/4">
                    <Image src={item.background_image} />
                  </div>
                  <div className=" h-1/4 flex mainbg justify-around py-5 border-t-0 items-center">
                    <p>{item.name}</p>
                    {/* platform icons */}
                    <div className="flex items-center justify-between gap-10">
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
                      <div className="text-3xl flex gap-5 ">
                        <Link to={`/detail/${item.slug}`}>
                          <TbListDetails />
                        </Link>
                        {isAdded?.find((el) => el.slug == item.slug) ? (
                          <button
                            onClick={() => dispatch(removeFromCart(item))}
                            className=" text-rose-600 top-2 right-3"
                          >
                            <BsCartPlus />
                          </button>
                        ) : (
                          <button
                            onClick={() => dispatch(addItems(item))}
                            className=" hover:text-rose-500 duration-150 transition top-2 right-3"
                          >
                            <RiShoppingCartFill />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default PopularSlide;

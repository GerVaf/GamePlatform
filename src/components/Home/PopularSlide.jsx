import React, { useState } from "react";
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
  // console.log(PopularGame)
  const isAdded = useSelector((state) => state?.product.cart);
  // console.log(isAdded);
  const dispatch = useDispatch();
  const isMobile = windowWidth < 700;
  const slideOptions = {
    perPage: 3,
    width: isMobile ? 360 : 900,
    gap: "20px",
    // gap: isMobile ? "1rem" : "2rem",
    perPage: isMobile ? 2 : 3,
    pagination: true,
    rewind: true,
  };
  return (
    <>
      <div className="text-white  text-xl font-bold flex flex-col gap-5">
        <p>NEWEST GAMES</p>
        <div>
          <Splide className="py-7" options={slideOptions}>
            <SplideSlide>
              <div className="bg-white/50 rounded-md">
                <img
                  className="h-[150px] w-full rounded-t"
                  src="https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                />
                <h2 className=" text-[16px] font-medium p-1">Cyberpunk 2077</h2>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-white/50 rounded-md">
                <img
                  className="h-[150px] w-full rounded-t"
                  src="https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg"
                />
                <h2 className=" text-[16px] font-medium p-1">San tr</h2>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className=" bg-white/50 rounded-md">
                <img
                  className="h-[150px] w-full  rounded-t"
                  src="	https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg"
                />
                <h2 className="text-[16px] font-medium p-1">Star Wars</h2>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-white/50 rounded-md">
                <img
                  className="h-[150px] w-full rounded-t"
                  src="https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
                  alt=""
                />
                <h2 className=" text-[16px] font-medium p-1">
                  Star Wars
                </h2>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-white/50 rounded-md">
                <img
                  className="h-[150px] w-full rounded-t"
                  src="https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
                />
                <h2 className=" text-[16px] font-medium p-1">San tr</h2>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-white/50 rounded-md">
                <img
                  className="h-[150px] w-full rounded-t"
                  src="	https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg"
                />
                <h2 className=" text-[16px] font-medium p-1">San tr</h2>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-white/50 rounded-md">
                <img
                  className="h-[150px] w-full rounded-t"
                  src="https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg"
                />
                <h2 className=" text-[16px] font-medium p-1">San tr</h2>
              </div>
            </SplideSlide>
         
          </Splide>
        </div>
      </div>
    </>
  );
};

export default PopularSlide;

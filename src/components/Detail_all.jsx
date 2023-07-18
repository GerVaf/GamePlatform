import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";
import { AiFillWindows } from "react-icons/ai";
import { FaXbox, FaPlaystation } from "react-icons/fa";
import { SiNintendogamecube, SiScrollreveal } from "react-icons/si";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import DetailLoad from "./Loading/DetailLoad";
import Loading from "./Loading/Loading";
import CardSlide from "./DetailAll/CardSlide";

const Detail_all = () => {
  const gameDetail = useSelector(
    (state) => state?.product?.dateByYear?.results
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading state with a 2-second delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts before the delay
    return () => clearTimeout(loadingTimeout);
  }, []);

  // Set loading state to false after the images have finished loading
  const handleImageLoad = () => {
    setIsLoading(false);
  };


  if (isLoading) {
    return (
      <div className="sm:h-[100%] sm:w-[100%] w-[100vw] h-[80vh] overflow-hidden flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col sm:gap-16 overflow-hidden">
        {gameDetail?.map((item) => (
          <div className="flex justify-center" key={item?.id}>
            <div className="w-11/12 flex flex-col gap-5 border-slate-500 border-b py-5">
              {/* top */}
              <div className="flex flex-col sm:justify-between sm:flex-row text-white gap-5">
                {/* left */}
                <div className="sm:w-6/12 w-[100%] rounded-lg">
                  <div className="flex justify-center items-center overflow-hidden w-[100%] sm:h-[100%]">
                    {isLoading ? (
                      <DetailLoad className="bg-zinc-800" />
                    ) : (
                      <img
                        className="w-[100%] h-[100%] rounded-lg object-top object-cover"
                        src={item?.background_image}
                        alt=""
                        onLoad={handleImageLoad}
                      />
                    )}
                  </div>
                </div>

                {/* right */}
                <div className="sm:w-6/12 w-[100%] flex flex-col gap-5 ">
                  <p className="sm:text-xl font-bold">{item?.name}</p>

                  {/* platform */}
                  <div className="flex text-xl gap-5">
                    {item?.parent_platforms.some((el) =>
                      el.platform.name.includes("PC")
                    ) && (
                      <AiFillWindows className="hover:text-gray-300 transition-all duration-100" />
                    )}
                    {item?.parent_platforms.some((el) =>
                      el.platform.name.includes("Nintendo")
                    ) && (
                      <SiNintendogamecube className="hover:text-gray-300 transition-all duration-100" />
                    )}
                    {item?.parent_platforms.some((el) =>
                      el.platform.name.includes("PlayStation")
                    ) && (
                      <FaPlaystation className="hover:text-gray-300 transition-all duration-100" />
                    )}
                    {item?.parent_platforms.some((el) =>
                      el.platform.name.includes("Xbox")
                    ) && (
                      <FaXbox className="hover:text-gray-300 transition-all duration-100" />
                    )}
                  </div>

                  {/* gametype */}
                  <div className="flex flex-col gap-2">
                    <p className="sm:text-xl font-bold">GAME TYPE</p>
                    <div className="flex flex-wrap gap-3 px-3 py-1 rounded-sm mainbg">
                      {item?.genres.map((genr) => (
                        <span
                          key={genr.id}
                          className="sm:text-md text-sm border-r-2 px-3"
                        >
                          {genr.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* added customer */}
                  <div className="flex flex-col gap-1">
                    <p className="sm:text-xl font-bold">ADDED CUSTOMER COUNT</p>
                    <span>{item?.added}</span>
                  </div>
                  {/* release date */}
                  <div className="flex flex-col gap-1">
                    <p className="sm:text-xl font-bold">RELEASE DATE</p>
                    <span>{item?.released}</span>
                  </div>

                  {/* last updated */}
                  <div className="flex flex-col gap-1">
                    <p className="sm:text-xl font-bold">LAST UPDATED</p>
                    <span>{item?.updated}</span>
                  </div>
                </div>
              </div>

              {/* bottom */}
              <div className="text-white flex flex-col gap-5">
                {/* game highlight */}
                <div className="flex flex-col items-center gap-2 ">
                  <p className="sm:text-xl font-bold">GAME HIGHLIGHT</p>
                  {item?.short_screenshots.length > 0 ? (
                    <CardSlide item={item} />
                  ) : (
                    <p>No game highlight available</p>
                  )}
                </div>

                <div className="flex flex-col gap-5 ">
                  {/* tags */}
                  <div className=" sm:flex gap-5 flex-col hidden">
                    <p className="text-lg font-bold">TAGS</p>
                    <p className="gap-5 flex justify-center items-center font-medium">
                      View to scroll <SiScrollreveal />
                    </p>
                    {item?.tags.length > 0 ? (
                      <div className="flex flex-wrap h-32 gap-5 text-md overflow-y-scroll scrollbar-thumb-sky-600 scrollbar-thin scrollbar-track-slate-600">
                        {item?.tags.map((tag) => (
                          <div
                            className="flex justify-center items-center h-[100%]"
                            key={tag.id}
                          >
                            <button className="px-3 py-1 rounded-sm mainbg">
                              {tag.name}
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No tags available</p>
                    )}
                  </div>
                  {/* similar games */}
                  <div className="flex flex-col gap-5">
                    <p className="text-lg font-bold">SIMILAR GAMES</p>
                    <div className="flex gap-3 text-md">
                      {item?.tags.length > 0 ? (
                        <Marquee
                          className="flex justify-center items-center w-[100%] sm:h-72"
                          autoFill={true}
                          speed={70}
                          pauseOnHover={true}
                          gradientColor={false}
                        >
                          {item.tags.map((hilight) => (
                            <div
                              key={hilight.id}
                              className="mx-2 flex gap-3 font-bold"
                            >
                              <div className="flex justify-center items-center h-[100%]">
                                <img
                                  className="sm:h-56 h-36 object-cover rounded-md"
                                  src={hilight.image_background}
                                  alt=""
                                />
                              </div>
                            </div>
                          ))}
                        </Marquee>
                      ) : (
                        <p>No similar games available</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Detail_all;

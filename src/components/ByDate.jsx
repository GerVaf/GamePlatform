import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { yearData } from "../data/productsSlice";
import {
  useGet2013_2014Query,
  useGet2014_2015Query,
  useGet2015_2016Query,
  useGet2016_2017Query,
  useGet2018_2019Query,
  useGet2020_2021Query,
  useGet2022_2023Query,
} from "./service/DataApi";

const ByDate = () => {
  const dispatch = useDispatch();

  // Fetch data using queries
  const {
    data: data2013_2014,
    isLoading: isLoading2013_2014,
    isError: isError2013_2014,
  } = useGet2013_2014Query();
  const {
    data: data2014_2015,
    isLoading: isLoading2014_2015,
    isError: isError2014_2015,
  } = useGet2014_2015Query();
  const {
    data: data2015_2016,
    isLoading: isLoading2015_2016,
    isError: isError2015_2016,
  } = useGet2015_2016Query();
  const {
    data: data2016_2017,
    isLoading: isLoading2016_2017,
    isError: isError2016_2017,
  } = useGet2016_2017Query();
  const {
    data: data2018_2019,
    isLoading: isLoading2018_2019,
    isError: isError2018_2019,
  } = useGet2018_2019Query();
  const {
    data: data2020_2021,
    isLoading: isLoading2020_2021,
    isError: isError2020_2021,
  } = useGet2020_2021Query();
  const {
    data: data2022_2023,
    isLoading: isLoading2022_2023,
    isError: isError2022_2023,
  } = useGet2022_2023Query();

  const handleItemClick = (dataByYear) => {
    dispatch(yearData(dataByYear));
  };
  const nav =useNavigate()

  return (
    <div className="sm:h-[85vh] h-[250vh] flex flex-col gap-5">
      {/* top */}
      <div className="text-white sm:w-12/12 flex justify-center flex-wrap sm:flex-nowrap gap-5 sm:h-3/6 sm:my-5 sm:mx-10 ">
        <div
          onClick={() =>{ handleItemClick(data2013_2014), nav("/detail_all")}}
          className=" sm:w-2/6 sm:h-[100%] w-72 h-72 rounded-lg sm:rounded-2xl sm:mx-5 group hover:scale-[1.07] duration-500 transition relative cursor-pointer overflow-hidden "
        >
          {/* back img  */}
          <div className="w-[100%] h-[100%] z-20 absolute layer group-hover:opacity-90 opacity-90 duration-300 transition"></div>
          <div>
            <img
              className=" w-[100%] h-[100%] object-cover object-top group-hover:scale-[1.1] duration-300 transition opacity-90 absolute group-hover:opacity-95 z-10"
              src="https://assetsio.reedpopcdn.com/league_of_legends1_3Q0mo3s.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
              alt=""
            />
          </div>
          <div className="flex z-20 w-[100%] justify-around items-center absolute bottom-2">
            <div className="font-bold text-white">
              <h1 className="text-sm sm:text-md">2022-2023 Present</h1>
              <p className="text-[10px] sm:text-[12px]">
                br nyr kwr seat leelee lrlr
              </p>
            </div>
            <BsFillArrowRightSquareFill className="sm:text-2xl group-hover:translate-x-5 duration-500 transition" />
          </div>
        </div>
        <div
          onClick={() =>{ handleItemClick(data2014_2015), nav("/detail_all")}}
          className=" sm:w-2/6 sm:h-[100%] w-72 h-72 rounded-lg sm:rounded-2xl sm:mx-5 group hover:scale-[1.07] duration-500 transition relative cursor-pointer overflow-hidden "
        >
          {/* back img  */}
          <div className="w-[100%] h-[100%] z-20 absolute layer group-hover:opacity-90 opacity-90 duration-300 transition"></div>
          <div>
            <img
              className=" w-[100%] h-[100%] object-cover object-top group-hover:scale-[1.1] duration-300 transition opacity-90 absolute group-hover:opacity-95 z-10"
              src="https://assetsio.reedpopcdn.com/league_of_legends1_3Q0mo3s.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
              alt=""
            />
          </div>
          <div className="flex z-20 w-[100%] justify-around items-center absolute bottom-2">
            <div className="font-bold text-white">
              <h1 className="text-sm sm:text-md">2022-2023 Present</h1>
              <p className="text-[10px] sm:text-[12px]">
                br nyr kwr seat leelee lrlr
              </p>
            </div>
            <BsFillArrowRightSquareFill className="sm:text-2xl group-hover:translate-x-5 duration-500 transition" />
          </div>
        </div>
        <div
          onClick={() =>{ handleItemClick(data2015_2016), nav("/detail_all")}}
          className=" sm:w-2/6 sm:h-[100%] w-72 h-72 rounded-lg sm:rounded-2xl sm:mx-5 group hover:scale-[1.07] duration-500 transition relative cursor-pointer overflow-hidden "
        >
          {/* back img  */}
          <div className="w-[100%] h-[100%] z-20 absolute layer group-hover:opacity-90 opacity-90 duration-300 transition"></div>
          <div>
            <img
              className=" w-[100%] h-[100%] object-cover object-top group-hover:scale-[1.1] duration-300 transition opacity-90 absolute group-hover:opacity-95 z-10"
              src="https://assetsio.reedpopcdn.com/league_of_legends1_3Q0mo3s.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
              alt=""
            />
          </div>
          <div className="flex z-20 w-[100%] justify-around items-center absolute bottom-2">
            <div className="font-bold text-white">
              <h1 className="text-sm sm:text-md">2022-2023 Present</h1>
              <p className="text-[10px] sm:text-[12px]">
                br nyr kwr seat leelee lrlr
              </p>
            </div>
            <BsFillArrowRightSquareFill className="sm:text-2xl group-hover:translate-x-5 duration-500 transition" />
          </div>
        </div>
      </div>
      {/* bottom  */}
      <div className="text-white sm:w-12/12 flex flex-wrap sm:flex-nowrap gap-5 sm:h-3/6 sm:my-5 mx-10 justify-center ">
        <div
          onClick={() =>{ handleItemClick(data2016_2017), nav("/detail_all")}}
          className=" sm:w-6/12 sm:h-[100%] w-72 h-72 rounded-lg sm:rounded-2xl sm:mx-5 group hover:scale-105 duration-500 transition relative cursor-pointer overflow-hidden"
        >
          {/* back img  */}
          <div className="w-[100%] h-[100%] z-20 absolute layer group-hover:opacity-90 opacity-90 duration-300 transition"></div>
          <div>
            <img
              className=" w-[100%] h-[100%] object-cover object-top group-hover:scale-[1.1] duration-300 transition opacity-90 absolute group-hover:opacity-95 z-10"
              src="https://assetsio.reedpopcdn.com/league_of_legends1_3Q0mo3s.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
              alt=""
            />
          </div>
          <div className="flex z-20 w-[100%] justify-around items-center absolute bottom-2">
            <div className="font-bold text-white">
              <h1 className="text-sm sm:text-md">2022-2023 Present</h1>
              <p className="text-[10px] sm:text-[12px]">
                br nyr kwr seat leelee lrlr
              </p>
            </div>
            <BsFillArrowRightSquareFill className="sm:text-2xl group-hover:translate-x-5 duration-500 transition" />
          </div>
        </div>
        <div
          onClick={() =>{ handleItemClick(data2018_2019), nav("/detail_all")}}
          className=" sm:w-6/12 sm:h-[100%] w-72 h-72 rounded-lg sm:rounded-2xl sm:mx-5 group hover:scale-105 duration-500 transition relative cursor-pointer overflow-hidden "
        >
          {/* back img  */}
          <div className="w-[100%] h-[100%] z-20 absolute layer group-hover:opacity-90 opacity-90 duration-300 transition"></div>
          <div>
            <img
              className=" w-[100%] h-[100%] object-cover object-top group-hover:scale-[1.1] duration-300 transition opacity-90 absolute group-hover:opacity-95 z-10"
              src="https://assetsio.reedpopcdn.com/league_of_legends1_3Q0mo3s.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
              alt=""
            />
          </div>
          <div className="flex z-20 w-[100%] justify-around items-center absolute bottom-2">
            <div className="font-bold text-white">
              <h1 className="text-sm sm:text-md">2022-2023 Present</h1>
              <p className="text-[10px] sm:text-[12px]">
                br nyr kwr seat leelee lrlr
              </p>
            </div>
            <BsFillArrowRightSquareFill className="sm:text-2xl group-hover:translate-x-5 duration-500 transition" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByDate;

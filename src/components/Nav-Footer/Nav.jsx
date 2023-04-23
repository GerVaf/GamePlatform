import React from "react";
import profile from "../../data/profile.webp";
import {
  RiGlobalFill,
  RiShoppingCartFill,
} from "../../../node_modules/react-icons/ri";
import { BiBell } from "../../../node_modules/react-icons/bi";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import { useSelector } from "react-redux";
const Nav = () => {
  const amount = useSelector((state) => state.product.cart);
  return (
    <div className=" p-5 flex items-center">
      <div className="text-white w-1/12 font-bold text-2xl flex items-center gap-4 justify-center">
        <RiGlobalFill />
        <p>DICK</p>
      </div>
      <div className=" w-8/12">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-2/5 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 outline-none dark:focus:border-blue-500"
              placeholder="Search . . . . ."
              required
            />
          </div>
        </form>
      </div>
      <div className=" w-3/12 text-white flex text-3xl  justify-around items-center">
        <div className="flex gap-10">
          <Link to={"/"}>
            <button
              type="button"
              class="bg-gradient-to-r shadow-blue-500/50 shadow-lg hover:from-cyan-400 hover:to-blue-600 from-cyan-400 to-blue-500 text-white text-2xl px-3 py-3 rounded-2xl"
            >
              <BiBell />
            </button>
          </Link>
          <Link to={"/cart"}>
            <button
              type="button"
              class="relative bg-gradient-to-r shadow-blue-500/50 shadow-lg hover:from-cyan-400 hover:to-blue-600 from-cyan-400 to-blue-500 text-white text-2xl px-3 py-3 rounded-2xl"
            >
              {amount.length > 0 ? (
                <span className=" rounded-[50%] w-6 h-6 flex items-center justify-center bg-red-400 text-white text-sm top-[-5px] right-[-10px] absolute">
                  {amount.length}
                </span>
              ) : null}
              <RiShoppingCartFill />
            </button>
          </Link>
        </div>

        <div className="avatar">
          <div className=" w-24 border-2 border-[#65a1f0] rounded-2xl">
            <img className=" rounded-2xl" src={profile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

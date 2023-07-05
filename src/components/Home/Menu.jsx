import React from "react";
import { ImHome3 } from "../../../node_modules/react-icons/im";
import {
  AiFillMessage,
  AiFillHeart,
} from "../../../node_modules/react-icons/ai";
import { GiRamProfile } from "../../../node_modules/react-icons/gi";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="w-12/12 flex mx-3 my-2 py-3 bg-gray-900 sm:m-0 rounded-xl sm:rounded-none sm:bg-transparent sm:p-0 sm:flex-col items-center gap-7 justify-center sm:gap-10">
      {/* home  */}
      <NavLink to={"/"}>
        <button
          type="button"
          className=" hover:bg-gradient-to-r hover:shadow-blue-500/50 hover:shadow-lg hover:from-cyan-400 hover:to-blue-600 text-white
           text-xl sm:text-2xl sm:px-3 sm:py-3 p-3 rounded-xl sm:rounded-2xl border-none"
        >
          <ImHome3 />
        </button>
      </NavLink>
      {/* detail_all  */}
      <NavLink to={"/detail_all"}>
        <button
          type="button"
          className="hover:bg-gradient-to-r hover:shadow-blue-500/50 hover:shadow-lg hover:from-cyan-400 hover:to-blue-600 text-white
           text-xl sm:text-2xl sm:px-3 sm:py-3 p-3 rounded-xl sm:rounded-2xl border-none"
        >
          <AiFillMessage />
        </button>
      </NavLink>
      {/* choose Type  */}
      <NavLink to={"/choose_type"}>
        <button
          type="button"
          className="hover:bg-gradient-to-r hover:shadow-blue-500/50 hover:shadow-lg hover:from-cyan-400 hover:to-blue-600 text-white
           text-xl sm:text-2xl sm:px-3 sm:py-3 p-3 rounded-xl sm:rounded-2xl border-none"
        >
          <AiFillHeart />
        </button>
      </NavLink>
      {/* profile  */}
      <NavLink to={"/profile"}>
        <button
          type="button"
          className="hover:bg-gradient-to-r hover:shadow-blue-500/50 hover:shadow-lg hover:from-cyan-400 hover:to-blue-600 text-white
           text-xl sm:text-2xl sm:px-3 sm:py-3 p-3 rounded-xl sm:rounded-2xl border-none"
        >
          <GiRamProfile />
        </button>
      </NavLink>
    </div>
  );
};

export default Menu;

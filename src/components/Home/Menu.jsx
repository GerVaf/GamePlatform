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
    <div className="flex flex-col gap-10">
      {/* home  */}
      <NavLink to={"/"}>
        <button
          type="button"
          className=" hover:bg-gradient-to-r hover:shadow-blue-500/50 hover:shadow-lg hover:from-cyan-400 hover:to-blue-600 text-white text-2xl px-3 py-3 rounded-2xl"
        >
          <ImHome3 />
        </button>
      </NavLink>
      {/* detail_all  */}
      <NavLink to={"/detail_all"}>
        <button
          type="button"
          className="hover:bg-gradient-to-r hover:shadow-blue-500/50 hover:shadow-lg hover:from-cyan-400 hover:to-blue-600 text-white text-2xl px-3 py-3 rounded-2xl"
        >
          <AiFillMessage />
        </button>
      </NavLink>
      {/* buy cart  */}
      <NavLink to={"/buy_cart"}>
        <button
          type="button"
          className="hover:bg-gradient-to-r hover:shadow-blue-500/50 hover:shadow-lg hover:from-cyan-400 hover:to-blue-600 text-white text-2xl px-3 py-3 rounded-2xl"
        >
          <AiFillHeart />
        </button>
      </NavLink>
      {/* profile  */}
      <NavLink to={"/profile"}>
        <button
          type="button"
          className="hover:bg-gradient-to-r hover:shadow-blue-500/50 hover:shadow-lg hover:from-cyan-400 hover:to-blue-600 text-white text-2xl px-3 py-3 rounded-2xl"
        >
          <GiRamProfile />
        </button>
      </NavLink>
    </div>
  );
};

export default Menu;

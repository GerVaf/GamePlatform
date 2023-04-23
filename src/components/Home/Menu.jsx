import React from "react";
import { ImHome3 } from "../../../node_modules/react-icons/im";
import { AiFillMessage, AiFillHeart } from "../../../node_modules/react-icons/ai";
import { GiRamProfile } from "../../../node_modules/react-icons/gi";

const Menu = () => {
  return (
    <div className="flex flex-col gap-10">
      <button
        type="button"
        className="bg-gradient-to-r shadow-blue-500/50 shadow-lg hover:from-cyan-400 hover:to-blue-600 from-cyan-400 to-blue-500 text-white text-2xl px-3 py-3 rounded-2xl"
      >
        <ImHome3 />
      </button>
      <button
        type="button"
        className="hover:bg-gradient-to-r hover:shadow-blue-500/50 hover:shadow-lg hover:from-cyan-400 hover:to-blue-600 text-white text-2xl px-3 py-3 rounded-2xl"
      >
        <AiFillMessage />
      </button>
      <button
        type="button"
        className="hover:bg-gradient-to-r hover:shadow-blue-500/50 hover:shadow-lg hover:from-cyan-400 hover:to-blue-600 text-white text-2xl px-3 py-3 rounded-2xl"
      >
        <AiFillHeart />
      </button>
      <button
        type="button"
        className="hover:bg-gradient-to-r hover:shadow-blue-500/50 hover:shadow-lg hover:from-cyan-400 hover:to-blue-600 text-white text-2xl px-3 py-3 rounded-2xl"
      >
        <GiRamProfile />
      </button>
    </div>
  );
};

export default Menu;

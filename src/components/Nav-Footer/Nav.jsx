import React from "react";
import profile from "../../data/profile.webp";
import {
  RiGlobalFill,
  RiShoppingCartFill,
} from "../../../node_modules/react-icons/ri";
import { BiBell } from "../../../node_modules/react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
const Nav = () => {
  const [data, setData] = useState({});

  const getData = () => {
    // setData(Data)
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  const amount = useSelector((state) => state.product.cart);
  return (
    <div className=" p-5 flex items-center">
      <div className="text-white w-1/12 font-bold text-2xl flex items-center gap-4 justify-center">
        <RiGlobalFill />
        <p>DARK</p>
      </div>

      {/* auth */}
      <div className=" w-8/12 flex justify-center items-center">
        <div className="text-white flex gap-10 text-xl">
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
          <Link to={"/signup"}>
            <button>SignUp</button>
          </Link>
        </div>
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
        {/* profile info */}

        {/* <div className="mx-5 avatar flex gap-5 items-center text-white">
          <div className="text-lg ">
            <p>{data.displayName}</p>
            <p>{data.email}</p>
          </div>
          <div className=" w-24 border-2 border-[#65a1f0] rounded-2xl">
            <img className=" rounded-2xl" src={profile} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;

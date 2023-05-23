import React from "react";
import profile from "../../data/img/profile.webp";
import {
  RiGlobalFill,
  RiShoppingCartFill,
} from "../../../node_modules/react-icons/ri";
import { BiBell } from "../../../node_modules/react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useLogOutMutation } from "../service/Api";
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
  const userData = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [logout] = useLogOutMutation();

  const navigate = useNavigate();
  const logoutHandler = async () => {
    const data = await logout(token);
    console.log(data);
    navigate("/login");
  };

  const profileData = useSelector((state) => console.log(state));
  return (
    <div className=" p-5 flex items-center">
      <div className="text-white w-1/12 font-bold text-2xl flex items-center gap-4 justify-center">
        <RiGlobalFill />
        <p>DARK</p>
      </div>

      {/* auth */}
      <div className=" w-7/12 flex justify-center items-center">
        <div className="text-white flex gap-10 text-xl">
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
          <Link to={"/signup"}>
            <button>SignUp</button>
          </Link>
        </div>
      </div>
      <div className=" w-4/12 text-white flex text-3xl  justify-around items-center">
        <div className="flex gap-10">
          <Link to={"/"}>
            <button
              type="button"
              className="bg-gradient-to-r shadow-blue-500/50 shadow-lg hover:from-cyan-400 hover:to-blue-600 from-cyan-400 to-blue-500 text-white text-2xl px-3 py-3 rounded-2xl"
            >
              <BiBell />
            </button>
          </Link>
          <Link to={"/cart"}>
            <button
              type="button"
              className="relative bg-gradient-to-r shadow-blue-500/50 shadow-lg hover:from-cyan-400 hover:to-blue-600 from-cyan-400 to-blue-500 text-white text-2xl px-3 py-3 rounded-2xl"
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
        <div className="mx-5 avatar flex gap-5 items-center text-white">
          <div className=" w-24 border-2 border-[#65a1f0] flex flex-col gap-2 rounded-2xl">
            <img className="h-20 object-cover rounded-2xl" src={profile} />
          </div>
          <div className="text-lg flex flex-col gap-2">
            <p className="text-sm">{userData?.name}</p>
            <p className="text-sm">{userData?.created_at.substring(0, 10)}</p>
            <button
              onClick={logoutHandler}
              className="text-sm bg-gradient-to-r shadow-blue-500/50 shadow-lg hover:from-red-500 hover:to-rose-400 to-rose-500 from-red-600 text-white rounded-sm py-1 "
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

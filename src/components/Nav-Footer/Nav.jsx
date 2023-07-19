import React from "react";
import profile from "../../data/img/profile.webp";
import { RiShoppingCartFill } from "../../../node_modules/react-icons/ri";

import { FaSlackHash } from "../../../node_modules/react-icons/fa";
import { BiBell } from "../../../node_modules/react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useLogOutMutation } from "../service/AuthApi";
import { removeUser } from "../../data/authSlice";
const Nav = () => {
  const [data, setData] = useState({});

  const getData = () => {
    // setData(Data)
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(data);

  const amount = useSelector((state) => state.product.cart);
  const userData = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [logout] = useLogOutMutation();

  const navigate = useNavigate();
  const logoutHandler = async () => {
    const data = await logout(token);
    dispatch(removeUser());
    console.log(data);
    navigate("/login");
  };

  return (
    <div className="bg-gray-900 h-[10vh] flex items-center w-12/12 mb-5">
      <div className=" h-[100%] container sm:px-5 mx-auto justify-between flex items-center">
        <div className="text-white font-bold  sm:text-2xl flex items-center gap-2 justify-center">
          <FaSlackHash />
          <p>HashTag</p>
        </div>

        {/* auth */}
        {/* <div className=" w-7/12 flex justify-center items-center">
          <div className="text-white flex gap-10 text-xl">
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
            <Link to={"/signup"}>
              <button>SignUp</button>
            </Link>
          </div>
        </div> */}

        {/* shop and root */}
        <div className=" text-white justify-center flex sm:text-3xl items-center">
          <div className="flex gap-5 items-center sm:gap-10">
            <Link to={"/"}>
              <button
                type="button"
                className="bg-gradient-to-r shadow-blue-500/60 shadow-lg hover:from-cyan-400 hover:to-blue-600 from-cyan-400 to-blue-500 text-white sm:text-2xl p-2 rounded-md text-xl sm:rounded-xl"
              >
                <BiBell />
              </button>
            </Link>
            <Link to={"/cart"}>
              <button
                type="button"
                className="relative bg-gradient-to-r shadow-blue-500/60 shadow-lg hover:from-cyan-400 hover:to-blue-600 from-cyan-400 to-blue-500 text-white sm:text-2xl p-2 rounded-md text-xl sm:rounded-xl"
              >
                {amount?.length > 0 ? (
                  <span className=" rounded-[50%] w-6 h-6 flex items-center justify-center bg-red-400 text-white text-sm top-[-5px] right-[-10px] absolute">
                    {amount?.length}
                  </span>
                ) : null}
                <RiShoppingCartFill />
              </button>
            </Link>
            <div className=" border-2 border-[#65a1f0] flex flex-col gap-2 rounded-2xl">
              <img className="h-[45px] rounded-2xl" src={profile} />
            </div>
          </div>

          {/* profile info */}
          {/* <div className="mx-5 avatar flex gap-5 items-center text-white">
            <div className="text-lg flex flex-col gap-2">
              <p className="text-sm">{userData?.name}</p>
              <p className="text-sm">{userData?.created_at.substring(0, 10)}</p>
              {token && (
                <button
                  onClick={logoutHandler}
                  className="text-sm bg-gradient-to-r shadow-red-500/80 shadow-lg hover:from-red-500 hover:to-rose-400 to-rose-500 from-red-600 text-white rounded-sm py-1 "
                >
                  LogOut
                </button>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;

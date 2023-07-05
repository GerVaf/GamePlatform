import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../data/authSlice";
import { useLoginMutation } from "../service/AuthApi";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("shunelae@gmail.com");
  const [password, setPassword] = useState("soxyu555");

  const [login] = useLoginMutation()
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const loginHandler = async (e) => {
    e.preventDefault();
    const {data} = await login({email,password})
    console.log('loginn',data)
    dispatch(addUser({user: data?.user , token: data?.token }))
    if(data?.success){
      navigate("/")
    }
  };
  return (
    <>
      <div className="flex justify-center h-[80vh] items-center">
        <form
          onSubmit={loginHandler}
          className=" text-gray-200 bg-gray-700 p-16 rounded-md"
        >
          <div className="flex flex-col gap-2 mb-3">
            <label className="font-bold text-lg" htmlFor="name">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 outline-none text-black px-3 rounded-sm "
              placeholder="Enter your email"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <label className="font-bold text-lg" htmlFor="name">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 outline-none text-black px-3 rounded-sm "
              placeholder="Enter your password"
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="flex flex-col justify-around items-center mt-5 gap-5">
            <button className="bg-gradient-to-r shadow-blue-500/50 shadow-lg hover:from-cyan-400 hover:to-blue-600 from-cyan-400 to-blue-500 text-white px-3 w-[100%] py-3 rounded-lg">
              Login
            </button>
            <Link to={"/signup"}>
              <p>
                Don't you have an account?{" "}
                <Link
                  className="ml-3 text-red-500 font-bold hover:text-red-600"
                  to={"/signup"}
                >
                  {" "}
                  Sign up
                </Link>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

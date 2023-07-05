import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../service/AuthApi";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  const [signup,{error}] = useSignUpMutation()
  const navigate = useNavigate("/")

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = { name, email, password,password_confirmation };
    // console.log(user);
    const data = await signup(user)
    console.log(data)
    console.log(data?.data.success);
    if(data?.data.success){
      navigate('/login')
    }
  };
  return (
    <>
      <div className="flex justify-center h-[80vh] items-center">
        <form
          onSubmit={signUp}
          className=" text-gray-200 bg-gray-700 p-16 rounded-md"
        >
          <div className="flex flex-col gap-2 mb-3">
            <label className="font-bold text-lg" htmlFor="name">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-3 outline-none text-black px-3 rounded-sm "
              placeholder="Enter your name"
              type="text"
              name=""
              id=""
            />
          </div>
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
          <div className="flex flex-col gap-2 mb-3">
            <label className="font-bold text-lg" htmlFor="name">
              Confirm Password
            </label>
            <input
              value={password_confirmation}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="py-3 outline-none text-black px-3 rounded-sm "
              placeholder="Enter your password"
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="flex flex-col justify-around items-center mt-5 gap-5">
            <button className="bg-gradient-to-r shadow-blue-500/50 shadow-lg hover:from-cyan-400 hover:to-blue-600 from-cyan-400 to-blue-500 text-white px-3 w-[100%] py-3 rounded-lg">
              Create account
            </button>

            <p>
              Already have an account?
              <Link
                className="ml-3 text-red-500 font-bold hover:text-red-600"
                to={"/login"}
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

import React, { useEffect } from "react";

import Nav from "./components/Nav-Footer/Nav";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Detail from "./components/Detail";
import Detail_all from "./components/Detail_all";
import Menu from "./components/Home/Menu";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addProducts } from "./data/productsSlice";
import Loading from "./components/Loading/Loading";

const App = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const FetchingData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://api.rawg.io/api/games?key=64d7c2e284ce406abb26e55182fdf488&dates=2019-09-01,2022-09-30&platforms=18,1,7"
    );
    const games = data?.results;
    // console.log(games);
    dispatch(addProducts(games));
    setLoading(false);
  };
  // console.log(Games);
  useEffect(() => {
    FetchingData();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex w-[100vw] h-[100vh] justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div>
          <Nav />

          <div className="flex">
            {/* left Menu  */}
            <div className=" sticky top-20 w-1/12 h-[100vh] flex justify-center">
              <Menu />
            </div>
            <div className=" w-11/12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/detail_all" element={<Detail_all />} />
                <Route path="/detail/:slug" element={<Detail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;

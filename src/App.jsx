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
import Guard from "./Guard";
import ByYear from "./components/ByDate/ByYear";
import ByDate from "./components/ByDate";

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
        <div className="h-[100vh] overflow-hidden sm:mb-0 mb-20">
          <Nav />

          <div className="flex relative">
            {/* left Menu  */}
            <div className=" hidden h-[40vh] sticky top-28 sm:w-1/12 sm:flex justify-center">
              <Menu />
            </div>
            <div className=" w-12/12 sm:w-11/12 h-[90vh] overflow-y-scroll scroll-smooth sm:scrollbar-thin sm:scrollbar-thumb-sky-500 ">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Guard>
                      <Home />
                    </Guard>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <Guard>
                      <Cart />
                    </Guard>
                  }
                />
                <Route
                  path="/detail_all"
                  element={
                    <Guard>
                      <Detail_all />
                    </Guard>
                  }
                />
                <Route
                  path="/detail/:slug"
                  element={
                    <Guard>
                      <Detail />
                    </Guard>
                  }
                />
                <Route
                  path="/choose_type"
                  element={
                    <Guard>
                      <ByDate />
                    </Guard>
                  }
                />
                <Route
                  path="/by_year"
                  element={
                    <Guard>
                      <ByYear />
                    </Guard>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </div>
          <div className=" z-50 block sm:hidden w-[100%] fixed bottom-0">
            <Menu />
          </div>
        </div>
      )}
    </>
  );
};

export default App;

import React from "react";

import Nav from "./components/Nav-Footer/Nav";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Detail from "./components/Detail";
import Detail_all from "./components/Detail_all";
import Menu from "./components/Home/Menu";

const App = () => {
  return (
    <>
      <Nav />

      <div className="flex">
        {/* left Menu  */}
        <div className=" w-1/12 h-[100vh] flex justify-center">
          <Menu />
        </div>
        <div className=" w-11/12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail_all" element={<Detail_all />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/detail/:slug" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;

import React from "react";

import Nav from "./components/Nav-Footer/Nav";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Detail from "./components/Detail";


const App = () => {
 

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/detail/:slug" element={<Detail/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  );
};

export default App;

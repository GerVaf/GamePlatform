import React from "react";

import Nav from "./components/Nav-Footer/Nav";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";


const App = () => {
 

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  );
};

export default App;

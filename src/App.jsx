import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
export default App;

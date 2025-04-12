/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Header/Nav";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import ScrollTopBtn from "./Components/Btns/ScrollTopBtn";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="relative">
          <Home />
        </div>
        <ScrollTopBtn />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

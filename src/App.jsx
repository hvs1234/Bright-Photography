/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Header/Nav";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import ScrollTopBtn from "./Components/Btns/ScrollTopBtn";
import Editorial from "./Pages/Editorial/Editorial";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editorial" element={<Editorial />} />
          </Routes>
        </div>
        <ScrollTopBtn />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

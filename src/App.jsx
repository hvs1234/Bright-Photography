/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Header/Nav";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className=""></div>
      </BrowserRouter>
    </>
  );
};

export default App;

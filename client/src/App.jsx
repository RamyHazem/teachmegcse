import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import A2 from "../pages/A2";
import AS from "../pages/AS";
import Home from "../pages/Home";
import IGCSE from "../pages/IGCSE";
import "./app.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/igcse" element={<IGCSE />} />
        <Route path="/as" element={<AS />} />
        <Route path="/a2" element={<A2 />} />
      </Routes>
    </>
  );
};

export default App;

import React, { Children } from "react";
import { Route, Routes } from "react-router-dom";
import ALevel from "../pages/Past_Papers/ALevel";
import YearsList from "../src/components/YearsList";
import Paper from "../pages/Past_Papers/Paper";
import Choices from "../src/components/Choices";

const ALevelRoutes = () => {
  return (
    <>
      <Choices />
      <Routes>
        <Route index element={<ALevel />} />
        <Route path=":subject" element={<YearsList />} />
        <Route path=":subject/:year" element={<Paper type="ALevel" />} />
      </Routes>
    </>
  );
};

export default ALevelRoutes;

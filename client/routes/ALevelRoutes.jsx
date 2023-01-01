import React from "react";
import { Route, Routes } from "react-router-dom";
import ALevel from "../pages/Past_Papers/ALevel";
import YearsList from "../src/components/YearsList";
import Choices from "../src/components/Choices";
import PaperList from "../src/components/PaperList";

const ALevelRoutes = () => {
  return (
    <>
      <Choices />
      <Routes>
        <Route index element={<ALevel />} />
        <Route path=":subject" element={<YearsList />} />
        <Route path=":subject/:year" element={<PaperList />} />
      </Routes>
    </>
  );
};

export default ALevelRoutes;

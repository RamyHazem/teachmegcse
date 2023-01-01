import React from "react";
import { Route, Routes } from "react-router-dom";
import IGCSE from "../pages/Past_Papers/IGCSE";
import YearsList from ".././src/components/YearsList";
import Choices from "../src/components/Choices";
import PaperList from "../src/components/PaperList";

const IGCSERoutes = () => {
  return (
    <>
      <Choices />
      <Routes>
        <Route index element={<IGCSE />} />
        <Route path=":subject" element={<YearsList />} />
        <Route path=":subject/:year" element={<PaperList />} />
      </Routes>
    </>
  );
};

export default IGCSERoutes;

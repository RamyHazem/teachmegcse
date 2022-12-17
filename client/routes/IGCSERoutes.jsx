import React from "react";
import { Route, Routes } from "react-router-dom";
import IGCSE from "../pages/Past_Papers/IGCSE";
import YearsList from ".././src/components/YearsList";
import Paper from "../pages/Past_Papers/Paper";
import Choices from "../src/components/Choices";

const IGCSERoutes = () => {
  return (
    <>
      <Choices />
      <Routes>
        <Route index element={<IGCSE />} />
        <Route path=":subject" element={<YearsList />} />
        <Route path=":subject/:year" element={<Paper type="IGCSE" />} />
      </Routes>
    </>
  );
};

export default IGCSERoutes;

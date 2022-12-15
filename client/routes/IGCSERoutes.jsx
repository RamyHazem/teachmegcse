import React from "react";
import { Route, Routes } from "react-router-dom";
import IGCSE from "../pages/IGCSE";
import YearsList from ".././src/components/YearsList";
import Paper from "../pages/Paper";

const IGCSERoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<IGCSE />} />
        <Route path=":subject" element={<YearsList />} />
        <Route path=":subject/:year" element={<Paper type="IGCSE" />} />
      </Routes>
    </>
  );
};

export default IGCSERoutes;

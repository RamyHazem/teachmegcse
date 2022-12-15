import React from "react";
import { Route, Routes } from "react-router-dom";
import AS from "../pages/A2";
import YearsList from ".././src/components/YearsList";
import Paper from "../pages/Paper";

const ASRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<AS />} />
        <Route path=":subject" element={<YearsList />} />
        <Route path=":subject/:year" element={<Paper type="AS" />} />
      </Routes>
    </>
  );
};

export default ASRoutes;

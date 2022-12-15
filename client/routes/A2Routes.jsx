import React from "react";
import { Route, Routes } from "react-router-dom";
import A2 from "../pages/A2";
import YearsList from ".././src/components/YearsList";
import Paper from "../pages/Paper";

const A2Routes = () => {
  return (
    <>
      <Routes>
        <Route index element={<A2 />} />
        <Route path=":subject" element={<YearsList />} />
        <Route path=":subject/:year" element={<Paper type="A2" />} />
      </Routes>
    </>
  );
};

export default A2Routes;

import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import Choices from "../src/components/Choices";
import SubjectList from "../src/components/SubjectList";

const Home = () => {
  return (
    <>
      <div className="top-container">
        <Navbar />
        <div className="title">Home of Past Papers for Cambridge IGCSE</div>
      </div>
      <Choices />
      <div className="content">
        <div className="left-column">
          <SubjectList />
        </div>
      </div>
    </>
  );
};

export default Home;

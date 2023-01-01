import React from "react";
import { useParams } from "react-router-dom";
import Paper from "./Paper";

const PaperList = () => {
  let { subject, year } = useParams();
  year = year.slice(-2);
  const [subjectName, code] = subject.split("_");

  return (
    <div className="paperlist-container">
      <div className="feb-container">
        <h1 className="paperlist-title">March</h1>
        <Paper code={code} year={year} />
      </div>
      <div className="june-container">
        <h1 className="paperlist-title">June</h1>
      </div>
      <div className="nov-container">
        <h1 className="paperlist-title">November</h1>
      </div>
    </div>
  );
};

export default PaperList;

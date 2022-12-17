import React from "react";
import { useParams } from "react-router-dom";
// import pdf from "../data/past_papers/0478/0478_m15_ms_12.pdf";

const Paper = ({ type }) => {
  const { subject, year } = useParams();

  return (
    <div>
      {/* <a href={pdf} target="_blank"> */}
      {type} {subject} {year}
      {/* </a> */}
    </div>
  );
};

export default Paper;

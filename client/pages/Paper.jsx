import React from "react";
import { useParams } from "react-router-dom";

const Paper = ({ type }) => {
  const { subject, year } = useParams();
  return (
    <div>
      {type} {subject} {year}
    </div>
  );
};

export default Paper;

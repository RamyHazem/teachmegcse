import React from "react";
import { Link } from "react-router-dom";

const Subject = ({ subject: { name, type, year, exam } }) => {
  return (
    <>
      <li className="dir">
        {!year ? (
          <Link to={`/${type}/${name}`}>
            {name} ({type})
          </Link>
        ) : (
          <Link to={`/${type}/${name}/${year}`}>{year}</Link>
        )}
      </li>
    </>
  );
};

export default Subject;

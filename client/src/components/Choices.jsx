import React from "react";
import { Link } from "react-router-dom";

const Choices = () => {
  return (
    <div className="choices-container">
      <div className="igcse">
        <Link to="/past-papers/IGCSE">
          <p>Cambridge IGCSEs</p>
        </Link>
      </div>
      <div className="as-level">
        <Link to="/past-papers/A-Level">
          <p>Cambridge A-Level</p>
        </Link>
      </div>
    </div>
  );
};

export default Choices;

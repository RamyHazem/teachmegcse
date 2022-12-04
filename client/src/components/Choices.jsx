import React from "react";
import { Link } from "react-router-dom";

const Choices = () => {
  return (
    <div className="choices-container">
      <div className="igcse">
        <Link to="/IGCSE">
          <p>Cambridge IGCSEs</p>
        </Link>
      </div>
      <div className="as-level">
        <Link to="/AS">
          <p>Cambridge AS</p>
        </Link>
      </div>
      <div className="igcse">
        <Link to="/A2">
          <p>Cambridge A2</p>
        </Link>
      </div>
    </div>
  );
};

export default Choices;

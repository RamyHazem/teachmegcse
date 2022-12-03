import React from "react";

const Subject = ({ subject }) => {
  return (
    <>
      <li className="dir">
        <a href="">
          {subject.name} ({subject.type})
        </a>
      </li>
    </>
  );
};

export default Subject;

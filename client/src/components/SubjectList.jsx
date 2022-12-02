import React, { useState } from "react";
import Subject from "./Subject";

const SubjectList = () => {
  const [subjects, setSubjects] = useState([
    "Math",
    "English",
    "Biology",
    "Chemistry",
    "Physics",
  ]);

  return (
    <ul className="subject-list">
      {subjects.map((subject) => (
        <Subject subject={subject} />
      ))}
    </ul>
  );
};

export default SubjectList;

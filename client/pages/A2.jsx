import React, { useState, useEffect } from "react";
import SubjectsData from "../data/Subjects.json";
import SubjectList from "../src/components/SubjectList";

const A2 = () => {
  const [A2Subjects, setA2Subjects] = useState([]);

  useEffect(() => {
    const filteredA2Subjects = SubjectsData.subjects.filter(
      (subject) => subject.type === "A2"
    );
    setA2Subjects(filteredA2Subjects);
  }, []);

  return (
    <div className="content">
      <div>
        <SubjectList subjectsArray={A2Subjects} />
      </div>
    </div>
  );
};

export default A2;

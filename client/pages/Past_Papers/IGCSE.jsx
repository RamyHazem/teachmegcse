import React, { useState, useEffect } from "react";
import SubjectsData from "../../data/Subjects.json";
import SubjectList from "../../src/components/SubjectList";

const IGCSE = () => {
  const [IGCSESubjects, setIGCSESubjects] = useState([]);

  useEffect(() => {
    const filteredIGCSESubjects = SubjectsData.subjects.filter(
      (subject) => subject.type === "IGCSE"
    );
    setIGCSESubjects(filteredIGCSESubjects);
  }, []);

  return (
    <>
      <div className="content">
        <div>
          <SubjectList subjectsArray={IGCSESubjects} />
        </div>
      </div>
    </>
  );
};

export default IGCSE;

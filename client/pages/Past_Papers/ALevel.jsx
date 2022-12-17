import React, { useState, useEffect } from "react";
import SubjectsData from "../../data/Subjects.json";
import SubjectList from "../../src/components/SubjectList";

const ALevel = () => {
  const [ALevelSubjects, setALevelSubjects] = useState([]);

  useEffect(() => {
    const filteredALevelSubjects = SubjectsData.subjects.filter(
      (subject) => subject.type === "A-Level"
    );
    setALevelSubjects(filteredALevelSubjects);
  }, []);

  return (
    <>
      <div className="content">
        <div>
          <SubjectList subjectsArray={ALevelSubjects} />
        </div>
      </div>
    </>
  );
};

export default ALevel;

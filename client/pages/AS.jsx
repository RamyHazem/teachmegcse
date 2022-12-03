import React, { useState, useEffect } from "react";
import SubjectsData from "../data/Subjects.json";
import SubjectList from "../src/components/SubjectList";

const AS = () => {
  const [AsSubjects, setAsSubjects] = useState([]);

  useEffect(() => {
    const filteredAsSubjects = SubjectsData.subjects.filter(
      (subject) => subject.type === "AS"
    );
    setAsSubjects(filteredAsSubjects);
  }, []);

  return (
    <div className="content">
      <div>
        <SubjectList subjectsArray={AsSubjects} />
      </div>
    </div>
  );
};

export default AS;

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

  const [searchBarValue, setSearchBarValue] = useState("");

  const filterSubjects = (e) => {
    setSearchBarValue(e.target.value);

    const subjectsCopy = [...subjects];
    const resultsArray = subjectsCopy.filter((subject) =>
      subject.toLowerCase().includes(e.target.value)
    );
    setSubjects(resultsArray);

    // const filteredSubjects = subjectsCopy.filter((subject) =>
    //   subject.includes(value)
    // );
    // setSubjects(filteredSubjects);
    // console.log(filteredSubjects);
  };

  return (
    <>
      <input
        id="search-bar"
        type="text"
        placeholder="Search"
        onChange={filterSubjects}
      />

      <ul className="subject-list">
        {subjects.map((subject, i) => (
          <Subject subject={subject} key={i + subject} />
        ))}
      </ul>
    </>
  );
};

export default SubjectList;

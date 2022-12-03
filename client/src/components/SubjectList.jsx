import React, { useState, useRef, useEffect } from "react";
import Subject from "./Subject";
import subjectsData from "../../data/Subjects.json";

const SubjectList = () => {
  const [subjects, setSubjects] = useState();
  const searchBarRef = useRef("");

  useEffect(() => {
    setSubjects(subjectsData.subjects);
  }, []);

  const filterSubjects = (e) => {
    const query = searchBarRef.current.value;
    console.log(query);

    if (!query) return setSubjects(subjectsData.subjects);

    const filteredSubjects = subjectsData.subjects.filter((subject) =>
      subject.toLowerCase().includes(query.toLowerCase())
    );
    setSubjects(filteredSubjects);
  };

  return (
    <>
      <input
        id="search-bar"
        type="text"
        placeholder="Search"
        ref={searchBarRef}
        onChange={filterSubjects}
      />

      <ul className="subject-list">
        {subjects?.map((subject, i) => (
          <Subject subject={subject} key={i + subject} />
        ))}
      </ul>
    </>
  );
};

export default SubjectList;

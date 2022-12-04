import React, { useState, useRef, useEffect } from "react";
import Subject from "./Subject";

const SubjectList = ({ subjectsArray }) => {
  const [subjects, setSubjects] = useState();
  const searchBarRef = useRef("");

  useEffect(() => {
    setSubjects(subjectsArray);
  }, [subjectsArray]);

  const filterSubjects = (e) => {
    const query = searchBarRef.current.value;
    if (!query | (query === "")) return setSubjects(subjectsArray);

    const filteredSubjects = subjectsArray.filter((subject) =>
      subject.name.toLowerCase().includes(query.toLowerCase())
    );
    setSubjects(filteredSubjects);
  };

  return (
    <div>
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
    </div>
  );
};

export default SubjectList;

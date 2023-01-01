import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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
        {subjects?.map((subject, i) => {
          return (
            <div key={subject + i}>
              <li className="dir" key={i + subject}>
                <Link
                  to={`/past-papers/${subject.type}/${subject.name}_${subject.code}`}
                  key={i + subject}
                >
                  {`${subject.name} (${subject.code})`}
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SubjectList;

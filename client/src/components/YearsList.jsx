import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const YearList = () => {
  const [years, setYears] = useState([]);
  const searchBarRef = useRef("");

  const yearsArray = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];

  useEffect(() => {
    setYears(yearsArray);
  }, []);

  const filteryears = (e) => {
    const query = searchBarRef.current.value;
    if (!query | (query === "")) return setYears(yearsArray);

    const filteredyears = yearsArray.filter((year) => year.includes(query));
    setYears(filteredyears);
  };

  return (
    <div className="content">
      <div>
        <input
          id="search-bar"
          type="text"
          placeholder="Search"
          ref={searchBarRef}
          onChange={filteryears}
        />

        <ul className="subject-list">
          {years?.map((year, i) => {
            return (
              <div key={i + year}>
                <li className="dir" key={i + year}>
                  <Link to={`${year}`} key={i + year}>
                    {year}
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default YearList;

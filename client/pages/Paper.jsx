import React, { useState } from "react";
import { useEffect } from "react";
import SubjectList from "../src/components/SubjectList";

const Paper = ({ subject }) => {
  const [years, setYears] = useState([]);

  const yearsArr = [
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

  const arrCopy = [...years];

  const generateYearsArr = (copyOfArr) => {
    yearsArr.map((year) =>
      copyOfArr.push({
        ...subject,
        year: year,
      })
    );
    setYears(copyOfArr);
  };

  useEffect(() => {
    generateYearsArr(arrCopy);
  });

  return (
    <div>
      <SubjectList subjectsArray={arrCopy} />
    </div>
  );
};

export default Paper;

import { Route, Routes } from "react-router-dom";
import A2 from "../pages/A2";
import AS from "../pages/AS";
import Home from "../pages/Home";
import IGCSE from "../pages/IGCSE";
import Paper from "../pages/Paper";
import "./app.css";
import Choices from "./components/Choices";
import Navbar from "./components/Navbar";
import SubjectData from "../data/Subjects.json";

const App = () => {
  return (
    <>
      <div className="top-container">
        <Navbar />
        <div className="title">Home of Past Papers for Cambridge IGCSE</div>
      </div>
      <Choices />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/IGCSE" element={<IGCSE />} />
        <Route path="/AS" element={<AS />} />
        <Route path="/A2" element={<A2 />} />
        {SubjectData.subjects.map((subject, i) => {
          return (
            <Route
              path={`/${subject.type}/${subject.name}`}
              element={<Paper subject={subject} />}
              key={subject + i}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default App;

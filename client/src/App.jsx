import { Route, Routes } from "react-router-dom";
import "./app.css";
import PastPapers from "../pages/Past_Papers/PastPapers";
import Navbar from "./components/Navbar";
import IGCSERoutes from "../routes/IGCSERoutes";
import ALevelRoutes from "../routes/ALevelRoutes";
import Home from "../pages/Home";

const App = () => {
  return (
    <>
      <div className="top-container">
        <Navbar />
        <div className="title">Home of Past Papers for Cambridge IGCSE</div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/past-papers/*">
          <Route index element={<PastPapers />} />
          <Route path="IGCSE/*" element={<IGCSERoutes />} />
          <Route path="A-Level/*" element={<ALevelRoutes />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

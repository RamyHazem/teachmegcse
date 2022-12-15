import { Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "../pages/Home";
import Choices from "./components/Choices";
import Navbar from "./components/Navbar";
import IGCSERoutes from "../routes/IGCSERoutes";
import ASRoutes from "../routes/ASRoutes";
import A2Routes from "../routes/A2Routes";

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
        <Route path="/IGCSE/*" element={<IGCSERoutes />} />
        <Route path="/AS/*" element={<ASRoutes />} />
        <Route path="/A2/*" element={<A2Routes />} />
      </Routes>
    </>
  );
};

export default App;

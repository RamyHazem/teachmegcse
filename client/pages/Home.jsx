import SubjectList from "../src/components/SubjectList";
import subjectsData from "../data/Subjects.json";

const Home = () => {
  return (
    <>
      <div className="content">
        <SubjectList subjectsArray={subjectsData.subjects} />
      </div>
    </>
  );
};

export default Home;

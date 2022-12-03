import SubjectList from "../src/components/SubjectList";
import subjectsData from "../data/Subjects.json";

const Home = () => {
  return (
    <>
      <div className="content">
        <div>
          <SubjectList subjectsArray={subjectsData.subjects} />
        </div>
      </div>
    </>
  );
};

export default Home;

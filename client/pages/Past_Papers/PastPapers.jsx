import SubjectList from "../../src/components/SubjectList";
import subjectsData from "../../data/Subjects.json";
import Choices from "../../src/components/Choices";

const PastPapers = () => {
  return (
    <>
      <Choices />
      <div className="content">
        <SubjectList subjectsArray={subjectsData.subjects} />
      </div>
    </>
  );
};

export default PastPapers;

import { SceneLayout } from "../../components/common/Layout";

const Skills = ({ setSelectedPage, language, selectedPage }) => {
  return (
    <SceneLayout className="md" id="skills">
      {selectedPage}
    </SceneLayout>
  );
};

export default Skills;

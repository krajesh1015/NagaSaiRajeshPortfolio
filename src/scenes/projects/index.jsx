import { SceneLayout } from "../../components/common/Layout";

const Projects = ({ setSelectedPage, language, selectedPage }) => {
  return (
    <SceneLayout className="md" id="projects">
      {selectedPage}
    </SceneLayout>
  );
};

export default Projects;

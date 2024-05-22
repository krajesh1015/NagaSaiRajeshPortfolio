import Divider from "../../components/common/Divider";
import { Column, Row, SceneLayout } from "../../components/common/Layout";
import PageTitle from "../../components/common/PageTitle";
import useMediaQuery from "../../hooks/useMediaQuery";
import { texts } from "../../utils/texts";
import Project from "./components/project";
import { projects } from "./../../utils/projects";

const Projects = ({ language }) => {
  const desktop = useMediaQuery("(min-width: 1279px)");

  return (
    <SceneLayout
      className="md"
      id="projects"
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: desktop ? "center" : "flex-start",
      }}
    >
      <Column width={desktop ? "50%" : "100%"}>
        <PageTitle style={{ alignSelf: "flex-start" }}>
          {texts[language].projects.title}
        </PageTitle>
        <Divider width={"30%"} />
        <p>{texts[language].projects.text}</p>
      </Column>
      <Row align="flex-start" style={{ marginTop: desktop ? "" : "1rem" }}>
        <Project project={projects[0]} language={language} />
        <Project project={projects[1]} language={language} />
        <Project project={projects[2]} language={language} />
      </Row>
    </SceneLayout>
  );
};

export default Projects;

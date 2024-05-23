import { Row } from "../../../../components/common/Layout";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import {
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectLink,
  ProjectTechnologies,
  ProjectTitle,
} from "./components/style";

const Project = ({ project, language }) => {
  const desktop = useMediaQuery("(min-width: 1019px)");
  return (
    <ProjectCard>
      <ProjectImage src={project.img} />
      <div className="project-hover">
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.subtitle[language]}</ProjectDescription>

        {desktop && (
          <Row
            justify="flex-start"
            style={{
              margin: "0.5rem 1rem",
            }}
          >
            {project.technologies.map((tech, index) => (
              <ProjectTechnologies key={index}>{tech}</ProjectTechnologies>
            ))}
          </Row>
        )}
        <Row
          justify="flex-start"
          style={{
            margin: desktop ? "1rem" : "0.5rem",
          }}
        >
          {project.git && (
            <ProjectLink>
              <i className="fab fa-github"></i> GitHub
            </ProjectLink>
          )}
          {project.path && (
            <ProjectLink>
              <i className="fas fa-external-link-alt"></i>{" "}
              {language === "pt" ? "Visitar" : "Visit"}
            </ProjectLink>
          )}
        </Row>
      </div>
    </ProjectCard>
  );
};

export default Project;
